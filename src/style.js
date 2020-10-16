function getStyles(css) {
  return css`
    ha-card {
      display: flex;
      flex-flow: row;
      align-items: center;
      padding: 16px;
      color: var(--primary-text-color, #000);
      font-weight: var(--swc-font-weight, 400);
      transition: background 1s;
      cursor: pointer;
    }
    ha-card[bg] {
      font-weight: var(--swc-font-weight, 500);
      background: var(--day-color);
      color: var(--text-color);
    }
    ha-card[bg][night] {
      background: var(--night-color);
    }
    ha-card[bg][fade] {
      background: linear-gradient(var(--day-color), transparent 250%);
    }
    ha-card[bg][fade][night] {
      background: linear-gradient(var(--night-color) 0%, transparent 300%);
    }
    .weather__icon {
      height: 40px;
      width: 40px;
      background-size: contain;
      background-repeat: no-repeat;
      flex: 0 0 40px;
      color: white;
      margin-right: 16px;
    }
    .weather__icon--small {
      display: inline-block;
      height: 1em;
      width: 1em;
      min-width: 1em;
      flex: initial;
      margin: 0 .2em;
    }
    .weather__info {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      min-height: 42px;
      min-width: 0;
    }
    .weather__info__row {
      display: flex;
      align-items: center;
      max-width: 100%;
    }
    .weather__info__item {
      padding-left: 8px;
      display: flex;
      align-items: center;
    }
    .weather__info--add {
      padding-left: 8px;
      margin-left: auto;
      align-items: flex-end;
    }
    .weather__info__state,
    .weather__info__title,
    .weather__info__row {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .weather__info__dust {
      font-size: 0.8em;
    }
    .weather__dust {
      margin-left: 2px;
      padding: 0 2px;
      line-height: 14px;
      border-radius: 3px;
      color: #fff;
    }
    .weather__dust_g1 {
      background-color: #2876bc;
    }
    .weather__dust_g2 {
      background-color: #239ad5;
    }
    .weather__dust_g3 {
      background-color: #0caec3;
    }
    .weather__dust_g4 {
      background-color: #319141;
    }
    .weather__dust_g5 {
      background-color: #f68e18;
    }
    .weather__dust_g6 {
      background-color: #e84c20;
    }
    .weather__dust_g7 {
      background-color: #d62a2c;
    }
    .weather__dust_g8 {
      background-color: #4e342e;
    }
    .weather__dust_g0 {
      display: none;
    }
  `;
}

export default getStyles;
