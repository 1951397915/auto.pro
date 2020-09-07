import { ReplaySubject } from 'rxjs';
export * from './permission';
export * from './pausable';
export * from './screen';
export * from './store';
export * from './utils';
/**
 * 作业流
 */
export declare const effect$: ReplaySubject<[any, any]>;
/**
 * ui线程
 */
export declare const uiThread: any;
/**
 * ui线程事件
 */
export declare const uiEvent: any;
/**
 * 作业线程
 */
export declare let effectThread: Thread;
/**
 * 作业线程事件
 */
export declare let effectEvent: any;
/**
 * @param {object} param
 * @param {number | 1280} param.baseWidth 基准宽度
 * @param {number | 720} param.baseHeight 基准高度
 * @param { false | '横屏' | '竖屏' | '自动'} param.needCap 是否需要截图功能
 * @param {boolean | false} param.needService 是否需要无障碍服务，默认为false
 * @param {boolean | false} param.needFloaty 是否需要悬浮窗权限，默认为false
 * @param {boolean | false} param.needForeground 是否需要自动打开前台服务，默认为false
 */
export default function ({ baseWidth, baseHeight, needCap, needService, needFloaty, needForeground, needStableMode }?: {
    baseWidth?: number;
    baseHeight?: number;
    needCap?: false | '横屏' | '竖屏' | '自动';
    needService?: boolean;
    needFloaty?: boolean;
    needForeground?: boolean;
    needStableMode?: boolean;
}): void;
