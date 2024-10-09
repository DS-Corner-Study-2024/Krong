const a = true;
if (a) {
  const m1 = await import("../ecmascript module/func.mjs");
  console.log(m1);
  const m2 = await import("../ecmascript module/var.mjs");
  console.log(m2);
}
