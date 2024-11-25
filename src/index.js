// Initialize the Spline viewer
const initializeSplineViewer = () => {
    const splineViewer = document.querySelector('spline-viewer');

    splineViewer.addEventListener("load-complete",() => {
        console.log("Spline Viewer loaded");
    });

};


// initializeSplineViewer();

console.log("Hello World");