import Konva from "konva";

const wrapper = document.createElement("div");
const stage = new Konva.Stage({
    container: wrapper,
    width: 300,
    height: 300,
});

let click_count = 0;
const layer = new Konva.Layer();
layer.on("mousedown", () => { click_count += 1; });
stage.add(layer);


export function simulatePointerDown(stage: Konva.Stage, pos: any) {
    stage._pointerdown({
        clientX: pos.x,
        clientY: pos.y,
        button: pos.button || 0,
        pointerId: pos.pointerId || 1,
        type: "pointerdown"
    } as any);
}

export function simulateMouseDown(stage: Konva.Stage, pos: any) {
    simulatePointerDown(stage, pos);
    stage._pointerdown({
        clientX: pos.x,
        clientY: pos.y,
        button: pos.button || 0,
        type: "mousedown"
    } as any);
}

test("test_works", () => {
    click_count = 0;
    layer.fire("mousedown");
    expect(click_count).toBe(1);
});

test("test_fails", () => {
    click_count = 0;
    simulateMouseDown(stage, { x: 10, y: 10 });
    expect(click_count).toBe(1);
});
