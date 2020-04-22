import { html, customElement } from "lit-element";
import { Subscription } from "rxjs";
import { EditorElement } from "./EditorElement";
import { Logger } from "@src/core/Logger";
import { changeDatabaseName, resizeCanvas } from "@src/core/command/canvas";
import { SIZE_CANVAS_MIN, SIZE_CANVAS_MAX } from "@src/core/Layout";

@customElement("vuerd-menubar")
class Menubar extends EditorElement {
  private subscriptionList: Subscription[] = [];

  connectedCallback() {
    super.connectedCallback();
    const { store } = this.context;
    this.subscriptionList.push(
      store.observe(store.canvasState, name => {
        Logger.debug(name);
        switch (name) {
          case "databaseName":
          case "width":
          case "height":
            this.requestUpdate();
            break;
        }
      })
    );
  }
  disconnectedCallback() {
    this.subscriptionList.forEach(sub => sub.unsubscribe());
    super.disconnectedCallback();
  }

  render() {
    const { databaseName, width } = this.context.store.canvasState;
    return html`
      <ul class="vuerd-menubar">
        <li>
          <input
            style="width: 200px;"
            type="text"
            title="database name"
            placeholder="database name"
            spellcheck="false"
            .value=${databaseName}
            @input=${this.onChangeDatabaseName}
          />
        </li>
        <li>
          <input
            style="width: 65px;"
            type="text"
            title="canvas size"
            spellcheck="false"
            placeholder="canvas size"
            .value=${width.toString()}
            @input=${this.onResizeValid}
            @change=${this.onResizeCanvas}
          />
        </li>
      </ul>
    `;
  }

  private onChangeDatabaseName(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const { store } = this.context;
    store.dispatch(changeDatabaseName(input.value));
  }
  private onResizeValid(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, "");
  }
  private onResizeCanvas(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    let size = Number(input.value.replace(/[^0-9]/g, ""));
    if (size < SIZE_CANVAS_MIN) {
      size = SIZE_CANVAS_MIN;
    } else if (size > SIZE_CANVAS_MAX) {
      size = SIZE_CANVAS_MAX;
    }
    input.value = size.toString();
    const { store } = this.context;
    store.dispatch(resizeCanvas(size, size));
  }
}
