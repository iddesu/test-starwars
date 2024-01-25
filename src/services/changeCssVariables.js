export const changeCssVariables = theme => {
    const root = document.querySelector(':root');

    root.style.setProperty('--theme-color-yellow', `var(--theme-color-${theme})`);
}