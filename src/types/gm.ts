export type GMNotificationOptions = {
  /**
   * A string containing the message to display in the notification.
   */
  text: string;
  /**
   * The title of the notification.
   *
   * @default loader_name
   */
  title?: string;
  /**
   * This tag will be used to identify this notification.
   * This way you can update existing notifications by calling GM_notification again and using the same tag.
   * If you don't provide a tag, a new notification will be created every time.
   *
   * @available Tampermonkey v5.0+, Violetmonkey 2.15.4+
   */
  tag?: string;
  /**
   * The URL of an image to display in the notification.
   *
   * @defaul loader_icon
   */
  image?: string;
  /**
   * A boolean flag whether to highlight the tab that sends the notfication (required unless text is set)
   *
   * @available Tampermonkey
   */
  highlight?: boolean;
  /**
   * A boolean flag whether to not play a sound
   *
   * @available Tampermonkey, Violetmonkey 2.15.2+ (Chrome 70)
   * @default false
   */
  silent?: boolean;
  /**
   * The time, in milliseconds, after which the notification should automatically close.
   *
   * @available Tampermonkey
   */
  timeout?: number;
  /**
   * Number of milliseconds to keep the notification after the userscript “dies”, i.e. when its tab or frame is reloaded/closed/navigated.
   * If not specified or invalid, the default behavior is to immediately remove the notifications.
   *
   * @available VioletMonkey 2.15.4+
   * @default 0
   */
  zombieTimeout?: number;
  /**
   * A URL to load when the user clicks on the notification.
   * You can prevent loading the URL by calling event.preventDefault() in the onclick event handler.
   *
   * @available Tampermonkey v5.0+
   */
  url?: string;
  /**
   * URL to open when a zombie notification is clicked, see zombieTimeout for more info.
   *
   * @available VioletMonkey 2.16.1+
   */
  zombieUrl?: string;
  /**
   * A callback function that will be called when the user clicks on the notification.
   */
  onclick?: () => void;
  /**
   * A callback function that will be called when the notification is closed (no matter if this was triggered by a timeout or a click) or the tab was highlighted
   */
  ondone?: () => void;
};
