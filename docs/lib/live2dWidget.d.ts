import { CubismMatrix44 } from '@framework/math/cubismmatrix44';
import { CubismViewMatrix } from '@framework/math/cubismviewmatrix';
import { Option } from '@framework/live2dcubismframework';
import { csmVector } from '@framework/type/csmvector';
import { ACubismMotion, FinishedMotionCallback } from '@framework/motion/acubismmotion';
import { ICubismModelSetting } from '@framework/icubismmodelsetting';
import { CubismIdHandle } from '@framework/id/cubismid';
import { CubismUserModel } from '@framework/model/cubismusermodel';
import { CubismMotion } from '@framework/motion/cubismmotion';
import { CubismMotionManager } from '@framework/motion/cubismmotionmanager';
import { CubismMotionQueueEntryHandle } from '@framework/motion/cubismmotionqueuemanager';
import { csmMap } from '@framework/type/csmmap';
import { csmRect } from '@framework/type/csmrectf';
import { csmString } from '@framework/type/csmstring';

declare class LAppSprite {
    _texture: WebGLTexture;
    _vertexBuffer: WebGLBuffer;
    _uvBuffer: WebGLBuffer;
    _indexBuffer: WebGLBuffer;
    _rect: Rect;
    _positionLocation: number;
    _uvLocation: number;
    _textureLocation: WebGLUniformLocation;
    _positionArray: Float32Array;
    _uvArray: Float32Array;
    _indexArray: Uint16Array;
    _firstDraw: boolean;
    _hitCallback?: () => void;
    constructor(x: number, y: number, width: number, height: number, textureId: WebGLTexture, hitCallback?: () => void);
    release(): void;
    getTexture(): WebGLTexture;
    render(programId: WebGLProgram): void;
    isHit(pointX: number, pointY: number): boolean;
}
declare class Rect {
    left: number;
    right: number;
    up: number;
    down: number;
}

declare class TouchManager {
    _startY: number;
    _startX: number;
    _lastX: number;
    _lastY: number;
    _lastX1: number;
    _lastY1: number;
    _lastX2: number;
    _lastY2: number;
    _lastTouchDistance: number;
    _deltaX: number;
    _deltaY: number;
    _scale: number;
    _touchSingle: boolean;
    _flipAvailable: boolean;
    constructor();
    getCenterX(): number;
    getCenterY(): number;
    getDeltaX(): number;
    getDeltaY(): number;
    getStartX(): number;
    getStartY(): number;
    getScale(): number;
    getX(): number;
    getY(): number;
    getX1(): number;
    getY1(): number;
    getX2(): number;
    getY2(): number;
    isSingleTouch(): boolean;
    isFlickAvailable(): boolean;
    disableFlick(): void;
    touchesBegan(deviceX: number, deviceY: number): void;
    touchesMoved(deviceX: number, deviceY: number): void;
    getFlickDistance(): number;
    calculateDistance(x1: number, y1: number, x2: number, y2: number): number;
    calculateMovingAmount(v1: number, v2: number): number;
}

declare class LAppView {
    _touchManager: TouchManager;
    _deviceToScreen: CubismMatrix44;
    _viewMatrix: CubismViewMatrix;
    _programId: WebGLProgram;
    _sprites: LAppSprite[];
    constructor();
    initialize(): void;
    release(): void;
    render(): void;
    addSprite(imgPath: string, position?: {
        x: number;
        y: number;
    }, size?: {
        width: number;
        height: number;
    }, hitCallback?: () => void): void;
    initializeSprite(): void;
    onTouchesBegan(pointX: number, pointY: number): void;
    onTouchesMoved(pointX: number, pointY: number): void;
    onTouchesEnded(pointX: number, pointY: number): void;
    transformViewX(deviceX: number): number;
    transformViewY(deviceY: number): number;
    transformScreenX(deviceX: number): number;
    transformScreenY(deviceY: number): number;
}

interface CanvasOptions {
    width: number;
    height: number;
}
interface SourceOptions {
    path: string;
    models: string[];
}
interface LAppDefineOptions {
    canvas?: CanvasOptions | 'auto';
    scale?: number;
    debug?: boolean;
    target?: HTMLElement;
    source: SourceOptions;
}
declare enum HitArea {
    Head = "Head",
    Body = "Body",
    Left = "Left",
    Right = "Right",
    Other = "Other"
}

declare class LAppTextureManager {
    _textures: csmVector<TextureInfo>;
    constructor();
    release(): void;
    createTextureFromPngFile(fileName: string, usePremultiply: boolean, callback: (textureInfo: TextureInfo) => void): void;
    releaseTextures(): void;
    releaseTextureByTexture(texture: WebGLTexture): void;
    releaseTextureByFilePath(fileName: string): void;
}
declare class TextureInfo {
    img: HTMLImageElement;
    id: WebGLTexture;
    width: number;
    height: number;
    usePremultply: boolean;
    fileName: string;
}

declare class LAppDelegate {
    _cubismOption: Option;
    _view: LAppView;
    _captured: boolean;
    _mouseX: number;
    _mouseY: number;
    _isEnd: boolean;
    _textureManager: LAppTextureManager;
    private static _instance;
    private static _frameBuffer;
    private static _canvas;
    private static _gl;
    static get canvas(): HTMLCanvasElement;
    static set canvas(value: HTMLCanvasElement);
    static get gl(): WebGLRenderingContext;
    static set gl(value: WebGLRenderingContext);
    static get frameBuffer(): WebGLFramebuffer;
    constructor();
    static getInstance(): LAppDelegate;
    static releaseInstance(): void;
    static set frameBuffer(value: WebGLFramebuffer);
    initialize(): boolean;
    mount(): void;
    private onEvent;
    onResize(): void;
    release(): void;
    run(): void;
    createShader(): WebGLProgram;
    getView(): LAppView;
    getTextureManager(): LAppTextureManager;
    initializeCubism(): void;
    private _resizeCanvas;
}

declare class LAppWavFileHandler {
    protected static _instance: LAppWavFileHandler;
    _pcmData: Array<Float32Array>;
    _userTimeSeconds: number;
    _lastRms: number;
    _sampleOffset: number;
    _wavFileInfo: WavFileInfo;
    _byteReader: ByteReader;
    _audio: HTMLAudioElement;
    _audioPlayPromise?: Promise<void>;
    constructor();
    _loadFileToBytes: (arrayBuffer: ArrayBuffer) => void;
    static getInstance(): LAppWavFileHandler;
    static releaseInstance(): void;
    update(deltaTimeSeconds: number): boolean;
    start(filePath: string): Promise<boolean>;
    getRms(): number;
    loadWavFile(filePath: string): Promise<boolean>;
    playWavFile(filePath: string): void;
    getPcmSample(): number;
    releasePcmData(): void;
    release(): void;
}
declare class WavFileInfo {
    _fileName: string;
    _numberOfChannels: number;
    _bitsPerSample: number;
    _samplingRate: number;
    _samplesPerChannel: number;
    constructor();
}
declare class ByteReader {
    _fileByte: ArrayBuffer;
    _fileDataView: DataView;
    _fileSize: number;
    _readOffset: number;
    constructor();
    get8(): number;
    get16LittleEndian(): number;
    get24LittleEndian(): number;
    get32LittleEndian(): number;
    getCheckSignature(reference: string): boolean;
}

declare class LAppModel extends CubismUserModel {
    get modelSetting(): ICubismModelSetting;
    private _modelSetting;
    _modelHomeDir: string;
    _userTimeSeconds: number;
    _eyeBlinkIds: csmVector<CubismIdHandle>;
    _lipSyncIds: csmVector<CubismIdHandle>;
    _motions: csmMap<string, ACubismMotion>;
    _expressions: csmMap<string, ACubismMotion>;
    _hitArea: csmVector<csmRect>;
    _userArea: csmVector<csmRect>;
    _idParamAngleX: CubismIdHandle;
    _idParamAngleY: CubismIdHandle;
    _idParamAngleZ: CubismIdHandle;
    _idParamEyeBallX: CubismIdHandle;
    _idParamEyeBallY: CubismIdHandle;
    _idParamBodyAngleX: CubismIdHandle;
    _state: number;
    _expressionCount: number;
    _textureCount: number;
    _motionCount: number;
    _allMotionCount: number;
    _wavFileHandler: LAppWavFileHandler;
    private readonly _rightArmMotionManager;
    private readonly _leftArmMotionManager;
    constructor();
    loadAssets(dir: string, fileName: string): void;
    private setupModel;
    private setupTextures;
    reloadRenderer(): void;
    update(): void;
    startMotion(group: string, no: number, priority: number, onFinishedMotionHandler?: FinishedMotionCallback): CubismMotionQueueEntryHandle;
    startRandomMotion(group: string, priority: number, onFinishedMotionHandler?: FinishedMotionCallback): CubismMotionQueueEntryHandle;
    getMotion(group: string, no: number, onFinishedMotionHandler?: FinishedMotionCallback): {
        motion: CubismMotion;
        autoDelete: boolean;
    };
    startHandMotion(targetManage: CubismMotionManager, group: string, no: number, priority: number, onFinishedMotionHandler?: FinishedMotionCallback): CubismMotionQueueEntryHandle;
    startRandomRightHandMotion(group: string, priority: number, onFinishedMotionHandler?: FinishedMotionCallback): CubismMotionQueueEntryHandle;
    startRandomLeftHandMotion(group: string, priority: number, onFinishedMotionHandler?: FinishedMotionCallback): CubismMotionQueueEntryHandle;
    setExpression(expressionId: string): void;
    setRandomExpression(): void;
    motionEventFired(eventValue: csmString): void;
    hitOpacity(): boolean;
    hitTest(hitArenaName: string, x: number, y: number): boolean;
    preLoadMotionGroup(group: string): void;
    private reloadTextures;
    releaseMotions(): void;
    releaseExpressions(): void;
    doDraw(): void;
    draw(matrix: CubismMatrix44): void;
    release(): void;
}

declare class LAppLive2DManager {
    _viewMatrix: CubismMatrix44;
    _models: csmVector<LAppModel>;
    _sceneIndex: number;
    protected static _instance: LAppLive2DManager;
    constructor();
    _finishedMotion: (self: ACubismMotion) => void;
    static getInstance(): LAppLive2DManager;
    static releaseInstance(): void;
    getModel(no: number): LAppModel;
    releaseAllModel(): void;
    onDrag(x: number, y: number): void;
    onTap(x: number, y: number): void;
    onUpdate(): void;
    prevScene(): void;
    nextScene(): void;
    changeScene(index: number): void;
    setViewMatrix(m: CubismMatrix44): void;
}

declare class Live2dWidget {
    private static eventListener;
    static get model(): LAppDelegate;
    static get scene(): LAppLive2DManager;
    static get view(): LAppView;
    static init(options?: LAppDefineOptions): Promise<void>;
    static release(): Promise<void>;
    private static listener;
    static on(type: HitArea, callback: () => void): void;
    static emit(type: string): void;
}

export { HitArea, LAppDefineOptions, Live2dWidget, Live2dWidget as default };
