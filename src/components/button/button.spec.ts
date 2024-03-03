import { newSpecPage } from "@stencil/core/testing";
import { Button } from "./button";

describe("ada-button", () => {
  it("renders the default component", async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: "<ada-button></ada-button>",
    });

    expect(root).toEqualHtml(`
      <ada-button>
        <mock:shadow-root>
          <button class="button fill m primary">
          </button>
        </mock:shadow-root>
      </ada-button>
    `);
  });

  it("renders a secondary type button", async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<ada-button variant="fill" color="secondary" label="Button" type="standard"></ada-button>`,
    });
    expect(root).toEqualHtml(`
      <ada-button color="secondary" label="Button" type="standard" variant="fill">
        <mock:shadow-root>
          <button class="button fill m secondary">
          Button
          </button>
        </mock:shadow-root>
      </ada-button>
    `);
  });

  it("renders a secondary type full width button", async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<ada-button variant="fill" color="secondary" full-width="true" type="standard" label="Button"></ada-button>`,
    });
    expect(root).toEqualHtml(`
      <ada-button color="secondary" variant="fill" full-width="true" label="Button" type="standard">
        <mock:shadow-root>
          <button class="button fill m secondary full-width">
            Button
          </button>
        </mock:shadow-root>
      </ada-button>
    `);
  });

  it("renders a icon type button", async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<ada-button variant="fill" color="secondary" size="s" icon-name="pen" type="icon"></ada-button>`,
    });
    expect(root).toEqualHtml(`
      <ada-button color="secondary" icon-name="pen" size="s" type="icon" variant="fill">
        <mock:shadow-root>
          <button class="icon-btn secondary s">
            <ada-icon name="pen" size="s"></ada-icon>
          </button>
        </mock:shadow-root>
      </ada-button>
    `);
  });

  it("renders a label-icon type button", async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<ada-button variant="fill" color="secondary" size="s" icon-name="pen" type="label-icon"></ada-button>`,
    });
    expect(root).toEqualHtml(`
      <ada-button color="secondary" icon-name="pen" size="s" type="label-icon" variant="fill">
        <mock:shadow-root>
          <button class="button fill secondary s">
            <ada-icon class="icon-with-label" name="pen" size="m"></ada-icon>
          </button>
        </mock:shadow-root>
      </ada-button>
    `);
  });

  it("renders a disabled icon type button", async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<ada-button disabled="true" icon-name="pen" type="icon"></ada-button>`,
    });
    expect(root).toEqualHtml(`
      <ada-button disabled="true" icon-name="pen" type="icon">
        <mock:shadow-root>
          <button class="disabled icon-btn m primary" disabled="">
            <ada-icon name="pen" size="m"></ada-icon>
          </button>
        </mock:shadow-root>
      </ada-button>
    `);
  });

  it("renders a disabled button", async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<ada-button disabled type="standard" label="Button"></ada-button>`,
    });
    expect(root).toEqualHtml(`
      <ada-button disabled="" label="Button" type="standard">
        <mock:shadow-root>
          <button class="button disabled fill m primary" disabled="">
            Button
          </button>
        </mock:shadow-root>
      </ada-button>
    `);
  });

  it("should execute clicked method when button is clicked and it's not disabled", async () => {
    const { doc, root } = await newSpecPage({
      components: [Button],
      html: `<ada-button label="Button" type="standard"></ada-button>`,
    });
    const clickedFn = jest.fn();
    doc.addEventListener("clicked", clickedFn);

    const button = root?.shadowRoot?.querySelector("button");
    await button!.click();

    expect(clickedFn).toHaveBeenCalled();
  });

  it("should not execute clicked method when button is clicked and it's disabled", async () => {
    const { doc, root } = await newSpecPage({
      components: [Button],
      html: `<ada-button disabled label="Button" type="standard"></ada-button>`,
    });
    const clickedFn = jest.fn();
    doc.addEventListener("clicked", clickedFn);

    const button = root?.shadowRoot?.querySelector("button");
    await button!.click();

    expect(clickedFn).not.toHaveBeenCalled();
    expect(clickedFn).toHaveBeenCalledTimes(0);
  });
});
