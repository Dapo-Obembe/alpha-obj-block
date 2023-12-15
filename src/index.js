import "./index.scss"
import { TextControl, Flex, FlexBlock, FlexItem, Button, Icon } from "@wordpress/components"



// Registering the block to show in the backend's Block Editor blocks panel.
wp.blocks.registerBlockType("alpha-plugin/alpha-obj", {
    title: "Inline OBJ Questions",
    icon: "smiley",
    category: "common",
    attributes: {
        skyColor: { type: "string" },
        grassColor: {type: "string"}
    },
    edit: EditComponent,
    save: function(props){
        return null;
    }
});

function EditComponent(props) {
        function updateSkyColor(e) {
            props.setAttributes({skyColor: e.target.value})
        }
        function updateGrassColor(e) {
            props.setAttributes({grassColor: e.target.value})
        }
        return (
            <div className="alpha-obj-edit">
                <TextControl label="Question:" /> 
                <p>Answers:</p>
                <Flex>
                    <FlexBlock>
                        <TextControl />
                    </FlexBlock>
                    <FlexItem>
                        <Button>
                        <Icon icon="star-empty" className="mark-as-correct"/>    
                        </Button>
                    </FlexItem>
                    <FlexItem>
                        <Button className="answer-delete">
                            <Icon icon="trash"/>
                        </Button>
                    </FlexItem>
                    <FlexItem></FlexItem>
                </Flex>
            </div>
        )
    }