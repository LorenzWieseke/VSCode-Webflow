const bindBtnsToSpline = (splineViewer) => {
    const btns = document.querySelectorAll(`.spline-btn`);
    const app = splineViewer._spline;

    // Get all variables in the Spline scene
    const variables = app.getVariables();
    console.log('Spline Variables:', variables);

    btns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();

            // Iterate over all attributes of the button
            for (let attr of btn.attributes) {
                const attrName = attr.name;
                const attrValue = attr.value;

                // Check if the attribute name matches a variable in the Spline scene
                if (variables.hasOwnProperty(attrName)) {
                    console.log(`Setting variable ${attrName} to ${attrValue}`);
                    app.setVariables({ [attrName]: parseInt(attrValue) });
                } 
            }
        });
    });
};

// Initialize the Spline viewer
const initializeSplineViewer = () => {
    const splineViewer = document.querySelector('spline-viewer');

    splineViewer.addEventListener("load-complete",() => {
        console.log("Spline Viewer loaded");
        bindBtnsToSpline(splineViewer);
    });

};


initializeSplineViewer();
