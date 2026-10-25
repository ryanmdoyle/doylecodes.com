// @sveltejs/enhanced-img only types imports ending in `?enhanced`. Project screenshots also
// request responsive widths, so type that query too.
declare module '*?enhanced&w=1600;1000;600;320' {
	const value: import('@sveltejs/enhanced-img').Picture;
	export default value;
}
