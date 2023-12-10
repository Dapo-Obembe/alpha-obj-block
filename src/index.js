
// Registering the block to show in the backend's Block Editor blocks panel.
wp.blocks.registerBlockType("alpha-plugin/alpha-obj", {
    title: "Inline OBJ Questions",
    icon: "smiley",
    category: "common",
    attributes: {
        skyColor: { type: "string" },
        grassColor: {type: "string"}
    },
    edit: function (props) {
        function updateSkyColor(e) {
            props.setAttributes({skyColor: e.target.value})
        }
        function updateGrassColor(e) {
            props.setAttributes({grassColor: e.target.value})
        }
        return (
            <>
                <input type="text" placeholder="sky color" value={ props.attributes.skyColor } onChange={updateSkyColor} />
                <input type="text" placeholder="grass color" value={ props.attributes.grassColor } onChange={updateGrassColor} />
            </>
        )
    },
    save: function(props){
        return (
            <>
                <p>Today the sky is <strong>{props.attributes.skyColor}</strong> and the grass is <strong>{props.attributes.grassColor}</strong>.</p>
            </>
        )
    }
});