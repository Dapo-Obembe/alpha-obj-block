
// Registering the block to show in the backend.
wp.blocks.registerBlockType("alpa-plugin/alpha-obj", {
    title: "Inline OBJ Questions",
    icon: "smiley",
    category: "common",
    edit: function(){
        return (
            <div>Hello Here</div>
            
        )
    },
    save: function(){
        return (
            <div>Hello Frontend</div>
        )
    }
});