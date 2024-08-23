import "./scss/index.scss";
import ReactDocumentViewer from "./ReactDocumentViewer";

if (process.env.NODE_ENV !== "production") {
    window.addEventListener("load", () => {
        window.ReactDocumentViewer = new ReactDocumentViewer({
            rootElement: document.getElementById("root"),
            // files: [],
            files: [
                { src: "/test.jpg", fileName: "Image #1" },
                { src: "/test.webp", fileName: "Image #2" },
            ],
            downloadInNewWindow: false,
            // disablePlugins: ["pdf"],
            // fileIdentification: 'extension',
            // locale: 'es',
            // allowOpenFile: true,
            // noResetZoomAfterChange: true,
            // activeIndex: 0,
            // container: '',
            // drag: false,
            // showAttributes: false,
            // showFileName: false,
            // zoomable: false,
            // rotatable: false,
            // scalable: false,
            // noImgDetails: false,
            // noNavbar: false,
            // noToolbar: false,
            // noFooter: false,
            // allowLoop: false,
            // changeable: false,
            // customToolbar: () =>{},
            // zoomSpeed: 0.1,
            // defaultSize: { width: 100, height: 200 },
            // disableKeyboardSupport: false,
            // noResetZoomAfterChange: false,
            // noLimitInitializationSize: false,
            // defaultScale: 0.5,
            // disableMouseZoom: false,
            // showTotal: false,
            // maxScale: 1.5,
            // minScale: 0.5,
            // changeHandler: (activeIndex) => {},
            // showLoader: (s) => { },
            // allowDownloadFile: false,
            // errorMessage: (m) => {},
            // showError: (s) => {},
            // pdfWorkerUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.5.136/pdf.worker.mjs'
        });
        window.ReactDocumentViewer.render();
    });
}