declare module "*.css" {
  const type: string;
  export default type;
}
declare module "react-spring" {
  const type: typeof import("@react-spring/web");
  export default type;
}