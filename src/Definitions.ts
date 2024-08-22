import { Dispatch } from "react";

export enum ActionType {
    noOp = 0,
    zoomIn = 1,
    zoomOut = 2,
    prev = 3,
    next = 4,
    rotateLeft = 5,
    rotateRight = 6,
    reset = 7,
    // close = 8,
    scaleX = 9,
    scaleY = 10,
    download = 11,
}

export interface ErrorMessageProps {
    showError: boolean;
    errorInfo: string | null;
    allowCloseButton?: boolean;
    onHideError?: (e: Event) => {};
    onShowError?: () => void | {};
}

export interface ViewerImageSize {
    width: number;
    height: number;
}

export interface FileDescriptor {
    src: string;
    fileName: string;
    defaultSize?: ViewerImageSize;
}

export interface ImageViewerToolbarConfig {
    key: string;
    actionType: ActionType | 0;
    render?: React.ReactNode;
    onClick?: (activeImage: FileDescriptor) => void;
}

export interface ToolbarMSProps {
    fileName: string;
    fileType: string;
    disabled: boolean;
    zoom: boolean;
    zoomLevel: number;
    showFileName: boolean;
    showDownloadButton?: boolean;
    onZoom: (z: number) => void;
    handleDownload: () => void;
}

export const ImageViewerDefaultToolbar: ImageViewerToolbarConfig[] = [
    {
        key: "zoomIn",
        actionType: ActionType.zoomIn,
    },
    {
        key: "zoomOut",
        actionType: ActionType.zoomOut,
    },
    {
        key: "prev",
        actionType: ActionType.prev,
    },
    {
        key: "reset",
        actionType: ActionType.reset,
    },
    {
        key: "next",
        actionType: ActionType.next,
    },
    {
        key: "rotateLeft",
        actionType: ActionType.rotateLeft,
    },
    {
        key: "rotateRight",
        actionType: ActionType.rotateRight,
    },
    {
        key: "scaleX",
        actionType: ActionType.scaleX,
    },
    {
        key: "scaleY",
        actionType: ActionType.scaleY,
    },
    {
        key: "download",
        actionType: ActionType.download,
    },
];

export interface ImageViewerCanvasProps {
    fileName?: string;
    // imgSrc: string;
    image: HTMLImageElement | undefined;
    width: number;
    height: number;
    top: number;
    left: number;
    rotate?: number;
    scaleX: number;
    scaleY: number;
    loading?: boolean;
    drag: boolean;
    showFileName?: boolean;
    onChangeImgState: (
        width: number,
        height: number,
        top: number,
        left: number
    ) => void;
    onResize: () => void;
    // onCanvasMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface ImageToolbarProps {
    onAction: (config: ImageViewerToolbarConfig) => void;
    width: number;
    height: number;
    showAttributes: boolean;
    zoomable: boolean;
    rotatable: boolean;
    scalable: boolean;
    changeable: boolean;
    noImgDetails: boolean;
    toolbars: ImageViewerToolbarConfig[];
    activeIndex: number;
    count: number;
    showTotal: boolean;
    scale: number;
    showDownloadButton: boolean;
}

export interface ImageViewerCoreState {
    activeIndex: number;
    width: number;
    height: number;
    top: number;
    left: number;
    rotate: number;
    imageWidth: number;
    imageHeight: number;
    showFileName: boolean;
    scaleX: number;
    scaleY: number;
    loading: boolean;
    loadFailed: boolean;
    startLoading: boolean;
}

export interface ImageViewerNavProps {
    files: FileDescriptor[];
    activeIndex?: number;
    onChangeImg: (index: number) => void;
    fileName?: string;
}

export interface PDFViewerProps {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    pageWrapperRef: React.RefObject<HTMLElement>;
    file: any;
    scale: number;
    rotate: number;
    page: number;
    cMapUrl: string;
    cMapPacked: boolean;
    workerSrc?: string;
    withCredentials: boolean;
    onDocumentLoadSuccess: (p: any) => void;
    onDocumentLoadFail: (i: any) => void;
    onPageLoadSuccess: (o: any) => void;
    onPageLoadFail: () => void;
    onPageRenderSuccess: (p: any) => void;
    onPageRenderFail: (e: any | null) => void;
}

export interface PDFToolbarProps {
    pdfDocument: any;
    pdfPage: any;
    pageOut: number;
    scaleOut: number;
    SCALE_STEP: number;
    MAX_SCALE: number;
    MIN_SCALE: number;
    FILE_LIMIT: number;
    downloadVisible: boolean;
    setOnHideError?: Dispatch<any>;
    onZoomSearch: (s: string) => void;
    onPageSearch: (page: number) => void;
    onRotateChange: (isClock: boolean) => void;
    onDownloadFile: () => void;
    // onUploadFile: (f: any) => void,
    showLoader: (b: boolean) => void;
    showError: (b: boolean) => void;
    errorMessage: (m: string) => void;
}

export interface PDFThumbsProps {
    pdfDocument: any;
    page: number;
    setOnHideError?: Dispatch<any>;
    showError: (b: boolean) => void;
    onPageSearch: (page: number) => void;
    errorMessage: (m: string) => void;
}

export interface PDFToolbarElement {
    pdfDocument: any;
    initZoomStatus: () => void;
}

export interface DownloadFileProps {
    files: FileDescriptor[];
    fileIdentification: "extension" | "contents";
    activeIndex: number;
    downloadTimeout: number;
    onLoad: (
        buffer: Uint8Array,
        fileType: string,
        event: ProgressEvent
    ) => void;
    onError?: (event: ProgressEvent) => void;
    onAbort?: (event: ProgressEvent) => void;
}

interface CommonProps {
    // Current image index
    activeIndex: number;
    // The parent node rendered by the viewer, after setting, enable inline mode
    container?: HTMLElement;
    // Is the image draggable?
    drag?: boolean;
    // Whether to display image attributes
    showAttributes?: boolean;
    // show the document title/file name
    showFileName: boolean;
    // Whether to show the zoom button
    zoomable?: boolean;
    // Whether to display the spin button
    rotatable?: boolean;
    // Whether to show the transform button
    scalable?: boolean;
    // no render close button
    // noClose?: boolean;
    // no render image details
    noImgDetails?: boolean;
    // no render navbar
    noNavbar?: boolean;
    // no render toolbar
    noToolbar?: boolean;
    // no render footer
    noFooter?: boolean;
    // allow cycle through images (switches to first image after last)
    allowLoop?: boolean;
    // wheather to show change button
    changeable?: boolean;
    // custom toolbar
    customToolbar?: (
        toolbars: ImageViewerToolbarConfig[]
    ) => ImageViewerToolbarConfig[];
    // zoom speed
    zoomSpeed?: number;
    // default image size
    defaultSize?: ViewerImageSize;
    // disable keyboard support
    disableKeyboardSupport?: boolean;
    // no reset zoom after image change
    noResetZoomAfterChange?: boolean;
    // no limit image initialization size
    noLimitInitializationSize?: boolean;
    // default scale
    defaultScale?: number;
    // disable mouse zoom
    disableMouseZoom?: boolean;
    // whether to download in a new window
    downloadInNewWindow?: boolean;
    // whether to display the total number and range
    showTotal?: boolean;
    // max scale
    maxScale?: number;
    // min scale
    minScale?: number;
    // url of worker, local or remote
    pdfWorkerUrl?: string;
    // callback for activeIndex change
    changeHandler?: (activeIndex: number) => void;
    // callback to display loader
    showLoader?: (s: boolean) => void;
    // makes download button visible on toolbars
    allowDownloadFile?: boolean;
    // Error message setter
    errorMessage?: (m: string) => void;
    // Error flag setter
    showError?: (s: boolean) => void;
}

export interface ViewerPluginProps extends CommonProps {
    // File buffer
    fileBuffer: Uint8Array | null;
    // File type category name
    fileType: string;
    // Currently active file descriptor
    activeFile: FileDescriptor;
    // Total files to browse
    filesTotal: number;
    // TODO: array of file descriptors to browse through
    files?: FileDescriptor[];
    // Sets flag that indicates the file is open
    setFileOpen?: Dispatch<any>;
    // Error handlers
    setOnShowError?: Dispatch<any>;
    setOnHideError?: Dispatch<any>;
}

interface UnifiedViewerProps extends CommonProps {
    // DOM element
    rootElement: HTMLElement;
    // File identification method 'extension' or 'contents'.
    // Extension looks at file exttension while contents comprares
    // file contents with preset magic numbers(byte masks).
    fileIdentification: "extension" | "contents";
    // array of file descriptors to browse through
    files: FileDescriptor[];
    // locale name (en, ru, zh, es, ...)
    locale?: "zh" | "en" | "es" | "ru";
    // download fails when the time is out
    downloadTimeout: number;
    // makes "Open File" button available
    allowOpenFile?: boolean;
}

export default UnifiedViewerProps;