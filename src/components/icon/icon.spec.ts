import { newSpecPage } from "@stencil/core/testing";
import { Icon } from "./icon";

describe("ada-icon", () => {
  it("renders the default component", async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: "<ada-icon></ada-icon>",
    });

    expect(root).toEqualHtml(`
      <ada-icon>
        <mock:shadow-root>
        <span class="icon-pencil icon-m" part="icon-element"></span>
        </mock:shadow-root>
      </ada-icon>
    `);
  });
});

describe("ada-icon", () => {
  it("renders the alert component of xl size", async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<ada-icon name="alert" size="xl"></ada-icon>',
    });

    expect(root).toEqualHtml(`
      <ada-icon name="alert" size="xl">
        <mock:shadow-root>
        <span class="icon-alert icon-xl" part="icon-element"></span>
        </mock:shadow-root>
      </ada-icon>
    `);
  });
});
