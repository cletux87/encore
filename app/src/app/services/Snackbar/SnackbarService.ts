import { Severity } from '../../../app/components/Snackbar/Snackbar';

interface SnackbarProps {
  severity?: Severity;
  title?: string;
  content: string;
  isOpen: boolean;
  duration?: number;
  actionButtonText?: string;
  onClose?: () => void;
  onCallToAction?: () => void;
}
class SnackbarService {
  public severity: Severity;
  public title: string | undefined;
  public content: string;
  public isOpen: boolean;
  public actionButtonText: string | undefined;
  public onClose: (() => void) | undefined;
  public onUndo: (() => void) | undefined;
  public onCallToAction: (() => void) | undefined;
  private listeners: (() => void)[];
  private queue: SnackbarProps[];
  private isQueueProcessing: boolean;
  private timer: NodeJS.Timeout | null;

  constructor() {
    this.isOpen = false;
    this.content = '';
    this.severity = 'default';
    this.actionButtonText = 'Call to action';
    this.listeners = [];
    this.queue = [];
    this.isQueueProcessing = false;
    this.timer = null;
  }

  subscribe(callback: () => void) {
    this.listeners.push(callback);
  }

  unsubscribe(callback: () => void) {
    this.listeners = this.listeners.filter((listener) => listener !== callback);
  }

  notify({
    severity = 'default',
    title,
    content,
    duration,
    actionButtonText = 'Call to action',
    onClose,
    onCallToAction,
  }: Omit<SnackbarProps, 'isOpen'>) {
    this.queue.push({
      severity,
      title,
      content,
      isOpen: true,
      duration,
      actionButtonText,
      onClose,
      onCallToAction,
    });

    if (!this.isQueueProcessing) {
      this.processQueue();
    }

    this.listeners.forEach((listener) => listener());
  }

  processQueue() {
    this.timer && clearTimeout(this.timer);
    this.isQueueProcessing = true;
    const item = this.queue.shift();
    if (item) {
      this.severity = item.severity || 'default';
      this.title = item.title;
      this.content = item.content;
      this.isOpen = item.isOpen;
      if (item.duration && item.duration > 0) {
        this.timer = setTimeout(() => {
          this.close();
        }, item.duration);
      }
      this.actionButtonText = item.actionButtonText;
      this.onClose = item.onClose;
      this.onCallToAction = item.onCallToAction;
      this.listeners.forEach((listener) => listener());
    }
  }

  close() {
    this.isQueueProcessing = false;
    this.isOpen = false;
    this.severity = 'default';
    this.title = undefined;
    this.content = '';
    this.actionButtonText = '';
    this.onClose = undefined;
    this.onUndo = undefined;
    this.onCallToAction = undefined;
    this.listeners.forEach((listener) => listener());

    if (this.queue.length > 0) {
      setTimeout(() => {
        this.processQueue();
      }, 500);
    }
  }
}

export default new SnackbarService();
