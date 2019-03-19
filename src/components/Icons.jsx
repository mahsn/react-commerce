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

    quarterCircle: {
        path:
            'm15.314 3e-3v9.032c3.262 0.107 5.884 2.787 5.884 6.075 0 3.356-2.73 6.084-6.085 6.084s-6.085-2.729-6.085-6.084c0-0.077 9e-3 -0.154 0.012-0.229h-9.034c-1e-3 0.076-6e-3 0.153-6e-3 0.229 0 8.333 6.779 15.111 15.113 15.111 8.333 0 15.112-6.778 15.112-15.111 0-8.265-6.67-14.999-14.911-15.107z',
        viewBox: '0 0 30.225 30.224',
        iconName: 'Quarter Circle',
    },

    star: {
        path:
            'M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z',
        viewBox: '0 0 1024 1024 ',
        iconName: 'Star',
    },
};

const Icon = props => {
    const iconFill = props.iconFill || 'black';
    const iconWidth = props.iconWidth || '34';
    const iconHeight = props.iconHeight || '34';
    const rotate = props.rotate || false;

    return (
        <svg
            className={icons[props.id].iconName}
            xmlns="http://www.w3.org/2000/svg"
            width={iconWidth}
            height={iconHeight}
            viewBox={icons[props.id].viewBox}
            aria-labelledby="title"
        >
            <animateTransform
                attributeName="transform"
                type={rotate ? 'rotate' : ''}
                calcMode="linear"
                values="0 0 0;360 0 0"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
            />
            <title id="title">{icons[props.id].iconName}</title>
            <path fill={iconFill} d={icons[props.id].path} />
        </svg>
    );
};

export default Icon;
