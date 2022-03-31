tinymce.init(
	{
		selector: 'textarea.contenteditor',
		height: 500,
		plugins: 'fullscreen',
		content_css: [
			"/bootstrap/bootstrap.compiled.css",
			"/assets/css/bootstrap/bootstrap.compiled.css",
		],
		content_style: "body {padding: 30px}"
	}
);