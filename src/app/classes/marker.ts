import { SVGTag } from '../models/hdb';

export class Marker {
  xmlns: string;
  markerSVG: any;

  constructor(x: number, y: number, scale: number) {
    this.xmlns = "http://www.w3.org/2000/svg";
    this.markerSVG = {
      type: "g",
      attributes: {
        id: "marker",
        transform: `translate(${x}, ${y})scale(${scale})`
      },
      children: [
        {
          type: "circle",
          attributes: {
            id: "bg-marker",
            style: "paint-order:normal; fill:white",
            r: "75.508",
            cx: "75.508",
            cy: "56.492"
          }
        },
        {
          type: "g",
          attributes: {
            id: "logo-marker",
            transform: "matrix(.29681 0 0 -.29681 -294.61 290.11)"
          },
          children: [
            {
              type: "g",
              attributes: { transform: "translate(1127.9,858.47)" },
              children: [
                {
                  type: "path",
                  attributes: {
                    fill: "#f8ab37",
                    d:
                      "m0 0s-79.335-120.94 38.006-190.41c0 0-101.14 20.61-105.22 83.885-5.098 78.984 67.217 106.52 67.217 106.52"
                  }
                }
              ]
            },
            {
              type: "g",
              attributes: { transform: "translate(1137.2,856.32)" },
              children: [
                {
                  type: "path",
                  attributes: {
                    fill: "none",
                    stroke: "#e94e1b",
                    "stroke-miterlimit": "10",
                    "stroke-width": "4",
                    d:
                      "m 0,0 c 0,0 -84.674,-132.171 55.211,-199.306 0,0 -118.253,16.343 -126.712,83.037 C -82.06,-33.018 0,0 0,0 Z"
                  }
                }
              ]
            },
            {
              type: "g",
              attributes: { transform: "translate(1208,657.6)" },
              children: [
                {
                  type: "path",
                  attributes: {
                    fill: "#f8ab37",
                    d:
                      "m0 0c-4.96 2.154-33.574 27.845-35.937 30.673-10.499 12.569-18.801 26.971-24.462 42.336-12.258 33.261-9.643 66.912 2.663 99.751 8.798 23.476 21.745 45.09 35.672 65.838 13.243 19.73 29.817 38.649 38.973 60.761 5.373 12.976 7.716 27.694 3.679 41.145 23.428-29.413 47.101-59.223 62.551-93.506 13.011-28.875 20.076-61.476 13.785-92.887-6.145-30.688-21.814-53.79-41.983-76.84-20.344-23.253-42.219-48.508-54.228-77.307-0.066-0.158-0.312-0.138-0.713 0.036"
                  }
                }
              ]
            },
            {
              id: "",
              type: "g",
              attributes: { transform: "translate(1371.6,866.14)" },
              children: [
                {
                  id: "",
                  type: "path",
                  attributes: {
                    fill: "#f8ab37",
                    d:
                      "m0 0c17.982-16.47 34.985-36.204 45.785-58.2 18.876-38.442 11.672-81.869-22.074-109.21-23.888-19.356-55.062-27.983-85.054-31.936-14.044-1.85-28.345-3.103-42.503-3.719-7.55-0.336-10.184 0.137-5.526 7.58 5.811 9.286 15.632 16.628 23.245 24.487 9.632 9.94 19.426 19.728 28.8 29.915 18.128 19.698 34.924 41.212 44.587 66.434 10.3 26.882 14.129 60.824-0.965 86.859-0.15 0.253-0.302 0.507-0.452 0.76 0 0 14.144-12.954 14.157-12.966"
                  }
                }
              ]
            },
            {
              type: "g",
              attributes: { transform: "translate(1213.8,661.33)" },
              children: [
                {
                  type: "path",
                  attributes: {
                    fill: "#e94e1b",
                    d:
                      "m0 0 0.264-0.104-0.517-0.209c3.466 7.839 7.83 15.267 12.776 22.265 4.917 7.025 10.418 13.625 16.192 19.954 11.494 12.724 24.038 24.412 36.006 36.508 11.944 12.086 23.365 24.719 32.108 38.922 4.365 7.082 8.065 14.534 10.734 22.318 2.723 7.769 4.496 15.86 5.417 24.055 0.178 2.056 0.451 4.102 0.557 6.164l0.238 6.193-0.109 6.204c-0.043 2.067-0.272 4.132-0.396 6.197-0.698 8.256-2.102 16.466-4.144 24.526-4.001 16.178-10.712 31.583-19.122 46.094-8.389 14.535-18.475 28.127-29.375 41.063-10.949 12.913-22.722 25.185-34.707 37.293l5.418 1.932c-0.943-8.684-3.071-17.19-6.06-25.313-2.987-8.132-6.815-15.892-11.145-23.298-8.679-14.825-19.311-28.242-30.2-41.186-10.836-12.931-21.549-25.922-31.226-39.631-9.653-13.684-18.333-28.163-24.9-43.48-6.418-15.285-9.029-32.121-8.578-48.793 0.446-16.688 3.858-33.391 10.423-48.833 6.632-15.41 16.34-29.526 28.35-41.329 6.029-5.875 12.594-11.215 19.642-15.831 7.049-4.609 14.542-8.539 22.354-11.681m-0.3-0.742c-7.846 3.199-15.362 7.189-22.427 11.856-7.068 4.659-13.726 9.947-19.813 15.836-12.219 11.719-22.34 25.711-29.333 41.217-7.046 15.48-11.004 32.352-11.866 49.395-0.795 17.028 1.511 34.378 7.867 50.41 6.548 15.829 15.191 30.58 24.822 44.595 9.646 14.012 20.295 27.234 30.996 40.314 10.687 13.006 20.951 26.312 29.185 40.769 4.107 7.217 7.687 14.709 10.434 22.469 2.749 7.755 4.65 15.78 5.435 23.907l0.642 6.634 4.776-4.702c12.191-11.999 24.254-24.219 35.571-37.207 11.282-13.002 21.884-26.747 30.817-41.664 8.849-14.92 16.083-31.059 20.393-48.04 4.235-16.96 6.023-34.75 3.738-52.289-1.138-8.749-3.239-17.388-6.331-25.67l-1.214-3.086c-0.41-1.025-0.789-2.065-1.288-3.05-0.957-1.988-1.842-4.011-2.919-5.931l-1.555-2.911-1.676-2.836c-1.088-1.908-2.315-3.723-3.509-5.557-4.829-7.308-10.474-13.961-16.334-20.306-5.884-6.334-12.081-12.307-18.39-18.102-12.588-11.625-25.634-22.613-37.548-34.775-5.91-6.112-11.615-12.447-16.642-19.309-5.023-6.856-9.476-14.144-13.05-21.868l-0.164-0.354-0.353 0.146z"
                  }
                }
              ]
            },
            {
              type: "g",
              attributes: { transform: "translate(1364.4,871.32)" },
              children: [
                {
                  type: "path",
                  attributes: {
                    fill: "none",
                    stroke: "#e94e1b",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "5",
                    d:
                      "m0 0s43.407-50.266 50.146-99.032c4.227-30.596-5.547-59.211-32.72-84.776-15.264-14.359-39.443-22.617-63.36-27.463-25.267-5.121-52.48-3.089-78.24-3.908 26.746 38.748 70.123 67.659 93.992 107.62 16.929 28.344 25.024 56.243 25.024 87.707 0 0-1.596 21.675-7.975 34.949z"
                  }
                }
              ]
            },
            {
              type: "g",
              attributes: { transform: "translate(1163.7,571.82)" },
              children: [
                {
                  type: "path",
                  attributes: {
                    fill: "#c85827",
                    "fill-rule": "evenodd",
                    d:
                      "m0 0c-0.523 0.456-1.016 0.927-1.474 1.396-18.322 18.782-20.957 49.505-8.015 70.798 12.037 19.804 36.002 29.747 58.096 39.989 10.414 4.827 20.72 9.864 30.483 15.597 8.226 4.831 21.141 11.046 24.239 19.609 0.61 1.686 0.467 3.418 1.784 4.941 1.571 1.816 4.336 2.463 6.84 1.353 20.795-9.234-22.733-41.768-29.654-48.319-3.291-3.115-6.807-6.8-6.189-10.947 1.508-10.117 20.793-10.729 29.64-10.937 20.209-0.473 41.435 1.602 60.572 8.043 8.724 2.937 17.907 6.747 25.223 12.03 7.631 5.51 13.369 13.799 21.683 18.495 4.175 2.359 11.064 1.996 12.543-2.243 0.845-2.423-0.469-4.992-1.816-7.221-18.179-30.105-49.333-53.566-85.287-64.593-36.23-11.111-79.423-1.085-112.36-21.42-5.348-3.301-10.589-6.908-14.48-11.585-5.104-6.135-4.542-11.462-5.341-18.302-2.545 0.368-4.577 1.655-6.483 3.316"
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  }

  /**
   * Retorna el marcador de tipo HTMLElement
   */
  public add(): SVGGElement {
    // console.log(this.createElement(this.markerSVG));
    return this.createElement(this.markerSVG);
  }

  private createElement(item: any): any {
    const { type, attributes, children }: SVGTag = item;

    const element = document.createElementNS(this.xmlns, type);

    this.setAttributes(element, attributes);

    if (children !== null && children !== undefined) {
      children.forEach(child => {
        element.appendChild(this.createElement(child));
      });
    }

    return element;
  }

  private setAttributes(element: any, attributes: any) {
    const _attributes = Object.entries(attributes);

    for (let key in _attributes) {
      element.setAttribute(_attributes[key][0], _attributes[key][1]);
    }
  }
}