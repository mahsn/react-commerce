import React from 'react';

const icons = {
    home: {
        path:
            'M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z',
        viewBox: '0 0 1024 1024',
        iconName: 'Home',
    },

    close: {
        path:
            'M1014.662 822.66c-0.004-0.004-0.008-0.008-0.012-0.010l-310.644-310.65 310.644-310.65c0.004-0.004 0.008-0.006 0.012-0.010 3.344-3.346 5.762-7.254 7.312-11.416 4.246-11.376 1.824-24.682-7.324-33.83l-146.746-146.746c-9.148-9.146-22.45-11.566-33.828-7.32-4.16 1.55-8.070 3.968-11.418 7.31 0 0.004-0.004 0.006-0.008 0.010l-310.648 310.652-310.648-310.65c-0.004-0.004-0.006-0.006-0.010-0.010-3.346-3.342-7.254-5.76-11.414-7.31-11.38-4.248-24.682-1.826-33.83 7.32l-146.748 146.748c-9.148 9.148-11.568 22.452-7.322 33.828 1.552 4.16 3.97 8.072 7.312 11.416 0.004 0.002 0.006 0.006 0.010 0.010l310.65 310.648-310.65 310.652c-0.002 0.004-0.006 0.006-0.008 0.010-3.342 3.346-5.76 7.254-7.314 11.414-4.248 11.376-1.826 24.682 7.322 33.83l146.748 146.746c9.15 9.148 22.452 11.568 33.83 7.322 4.16-1.552 8.070-3.97 11.416-7.312 0.002-0.004 0.006-0.006 0.010-0.010l310.648-310.65 310.648 310.65c0.004 0.002 0.008 0.006 0.012 0.008 3.348 3.344 7.254 5.762 11.414 7.314 11.378 4.246 24.684 1.826 33.828-7.322l146.746-146.748c9.148-9.148 11.57-22.454 7.324-33.83-1.552-4.16-3.97-8.068-7.314-11.414z',
        viewBox: '0 0 1024 1024',
        iconName: 'Close',
    },

    umbrella: {
        path:
            'M27 14h5c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0zM27 14c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0 14c0 1.112-0.895 2-2 2-1.112 0-2-0.896-2-2.001v-1.494c0-0.291 0.224-0.505 0.5-0.505 0.268 0 0.5 0.226 0.5 0.505v1.505c0 0.547 0.444 0.991 1 0.991 0.552 0 1-0.451 1-0.991v-14.009c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-5.415 6.671-9.825 15-9.995v-1.506c0-0.283 0.224-0.499 0.5-0.499 0.268 0 0.5 0.224 0.5 0.499v1.506c8.329 0.17 15 4.58 15 9.995h-5z',
        viewBox: '0 0 34 34',
        iconName: 'Umbrella',
    },

    visa: {
        path:
            'M51.916,111.982c-1.787-6.948-7.486-11.634-15.226-11.734H0.374L0,101.934   c28.329,6.984,52.107,28.474,59.821,48.688L51.916,111.982z M119.259,100.23l-14.643,91.122h23.405l14.634-91.122     C142.655,100.23,119.259,100.23,119.259,100.23z M189.857,137.348c-8.179-4.039-13.193-6.765-13.193-10.896     c0.1-3.756,4.24-7.604,13.485-7.604c7.604-0.191,13.193,1.596,17.433,3.374l2.124,0.948l3.182-19.065     c-4.623-1.787-11.953-3.756-21.007-3.756c-23.113,0-39.388,12.017-39.489,29.204c-0.191,12.683,11.652,19.721,20.515,23.943     c9.054,4.331,12.136,7.139,12.136,10.987c-0.1,5.908-7.321,8.634-14.059,8.634c-9.336,0-14.351-1.404-21.964-4.696l-3.082-1.404     l-3.273,19.813c5.498,2.444,15.609,4.595,26.104,4.705c24.563,0,40.546-11.835,40.747-30.152     C209.596,151.335,203.351,143.639,189.857,137.348z M272.891,100.512h-18.108c-5.58,0-9.82,1.605-12.236,7.331l-34.766,83.509     h24.563l6.765-18.08h27.481l3.51,18.153h21.664L272.891,100.512z M245.921,155.026c0.474,0.046,9.428-29.514,9.428-29.514     l7.13,29.514C262.479,155.026,250.544,155.026,245.921,155.026z M85.059,100.23l-22.931,61.909L59.63,149.93     c-4.24-14.087-17.533-29.395-32.368-36.999l20.998,78.33h24.764l36.799-91.021H85.059V100.23z',
        viewBox: '0 0 512 512',
        iconName: 'Visa Card',
    },
    paypal: {
        path:
            'M10.664,437.342C4.773,437.341-0.002,432.564,0,426.673c0-0.869,0.107-1.735,0.317-2.578   l10.667-42.453v-0.448l10.667-42.432c1.185-4.75,5.451-8.084,10.347-8.085h27.136c14.728-0.003,26.669,11.933,26.673,26.661   c0,2.181-0.267,4.354-0.795,6.47l-2.667,10.667c-2.967,11.875-13.637,20.205-25.877,20.203H29.672l-8.64,34.581   C19.845,434.015,15.567,437.351,10.664,437.342z M35.005,373.342h21.461c2.447-0.007,4.575-1.678,5.163-4.053l2.667-10.667   c0.731-2.841-0.981-5.737-3.822-6.467c-0.438-0.113-0.888-0.169-1.341-0.167H40.338L35.005,373.342z M124.733,437.342h-15.189c-16.33,0.004-29.571-13.231-29.575-29.561   c-0.001-2.419,0.296-4.829,0.882-7.175l0,0l1.408-5.675c3.157-12.736,14.612-21.662,27.733-21.611h15.189   c16.33,0.028,29.545,13.289,29.517,29.619c-0.004,2.407-0.302,4.804-0.887,7.138l-1.408,5.675   C149.243,428.457,137.824,437.366,124.733,437.342z M101.565,405.79c-1.096,4.414,1.594,8.88,6.008,9.976   c0.645,0.16,1.306,0.241,1.971,0.243h15.189c3.289,0.009,6.159-2.227,6.955-5.419l1.408-5.675c1.096-4.414-1.594-8.88-6.008-9.976   c-0.645-0.16-1.306-0.241-1.971-0.243h-15.189c-3.289-0.009-6.159,2.227-6.955,5.419L101.565,405.79z M138.664,437.342c-5.891-0.002-10.665-4.779-10.664-10.67c0-0.869,0.107-1.735,0.317-2.578   l10.667-42.667c1.426-5.72,7.218-9.202,12.939-7.776c5.72,1.426,9.202,7.218,7.776,12.939l-10.667,42.667   C147.845,434.015,143.567,437.351,138.664,437.342z M266.664,437.342c-5.891-0.002-10.665-4.779-10.664-10.67c0-0.869,0.107-1.735,0.317-2.578   l10.667-42.453v-0.448l10.667-42.432c1.185-4.75,5.451-8.084,10.347-8.085h27.136c14.728-0.003,26.669,11.933,26.673,26.661   c0,2.181-0.267,4.354-0.795,6.47l-2.667,10.667c-2.967,11.875-13.637,20.205-25.877,20.203h-26.795l-8.64,34.581   C275.845,434.015,271.567,437.351,266.664,437.342z M291.005,373.342h21.483c2.447-0.007,4.575-1.678,5.163-4.053l2.667-10.667   c0.73-2.841-0.981-5.737-3.822-6.467c-0.438-0.113-0.889-0.169-1.341-0.167h-18.816L291.005,373.342z M380.733,437.342h-15.189c-16.33,0.004-29.571-13.231-29.575-29.561   c-0.001-2.419,0.296-4.829,0.882-7.175l0,0l1.408-5.675c3.157-12.736,14.612-21.662,27.733-21.611h15.189   c16.33-0.004,29.571,13.231,29.575,29.561c0.001,2.419-0.296,4.829-0.882,7.175l-1.408,5.675   C405.309,428.467,393.854,437.393,380.733,437.342z M357.565,405.79c-1.096,4.414,1.594,8.88,6.008,9.976   c0.645,0.16,1.306,0.241,1.971,0.243h15.189c3.289,0.009,6.159-2.227,6.955-5.419l1.408-5.675c1.096-4.414-1.594-8.88-6.008-9.976   c-0.645-0.16-1.306-0.241-1.971-0.243h-15.189c-3.289-0.009-6.159,2.227-6.955,5.419L357.565,405.79z M394.664,437.342c-5.891-0.002-10.665-4.779-10.664-10.67c0-0.869,0.107-1.735,0.317-2.578   l10.667-42.667c1.426-5.72,7.218-9.202,12.939-7.776c5.72,1.426,9.202,7.218,7.776,12.939l0,0l-10.667,42.667   C403.845,434.015,399.567,437.351,394.664,437.342z M202.664,426.676c-3.568-0.002-6.898-1.787-8.875-4.757l-21.333-32   c-3.27-4.901-1.947-11.525,2.955-14.795s11.525-1.947,14.795,2.955l21.333,32c3.275,4.897,1.961,11.521-2.935,14.797   C206.846,426.051,204.778,426.677,202.664,426.676z M181.33,458.676c-5.891-0.002-10.665-4.78-10.663-10.671c0.001-2.493,0.875-4.907,2.471-6.823   l53.333-64c3.776-4.524,10.505-5.131,15.029-1.355c4.524,3.776,5.131,10.505,1.355,15.029l0,0l-53.333,64   C187.493,457.281,184.492,458.68,181.33,458.676z M437.33,437.342c-5.891-0.002-10.665-4.779-10.664-10.67c0-0.869,0.107-1.735,0.317-2.578  l21.333-85.333c1.426-5.72,7.218-9.202,12.939-7.776c5.72,1.426,9.202,7.218,7.776,12.939l0,0l-21.333,85.333  C446.512,434.015,442.234,437.351,437.33,437.342z',
        viewBox: '0 0 670 950',
        iconName: 'Paypal',
    },
};

export const Icon = props => {
    const iconFill = props.iconFill || 'black';
    const iconWidth = props.iconWidth || '34';
    const iconHeight = props.iconHeight || '34';

    return (
        <svg
            className={icons[props.id].iconName}
            xmlns="http://www.w3.org/2000/svg"
            width={iconWidth}
            height={iconHeight}
            viewBox={icons[props.id].viewBox}
            aria-labelledby="title"
        >
            <title id="title">{icons[props.id].iconName}</title>
            <path fill={iconFill} d={icons[props.id].path} />
        </svg>
    );
};