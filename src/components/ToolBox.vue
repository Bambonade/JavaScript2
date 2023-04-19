<template>
    <div>
        <h1>Toolbox App</h1>
        <form @submit.prevent="addTool">
            <label>Add Tool:</label>
            <input v-model="newToolName" placeholder="Tool Name" />
            <button type="submit">Add</button>
        </form>
        <ul>
            <li v-for="(tool, index) in tools" :key="tool.id">
                <div>
                    <input v-model="tool.name" />
                    <button @click="deleteTool(index)">Delete</button>
                </div>
            </li>
        </ul>
        <hr />
        <div v-for="(drawer, index) in drawers" :key="drawer.id">
            <h2>Drawer {{ index + 1 }}</h2>
            <form @submit.prevent="addToolToDrawer(index)">
                <label>Add Tool:</label>
                <select v-model="selectedToolId">
                    <option v-for="tool in tools" :key="tool.id" :value="tool.id">{{ tool.name }}</option>
                </select>
                <button type="submit">Add</button>
            </form>
            <ul>
                <li v-for="(tool, index) in drawer.tools" :key="tool.id">
                    <div>
                        <input v-model="tool.name" />
                        <button @click="deleteToolFromDrawer(index, drawer)">Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'ToolboxApp',
    setup() {
        const tools = ref([
            { id: 1, name: 'Hammer' },
            { id: 2, name: 'Screwdriver' },
            { id: 3, name: 'Wrench' },
        ]);

        const drawers = ref([
            { id: 1, tools: [] },
            { id: 2, tools: [] },
            { id: 3, tools: [] },
        ]);

        const newToolName = ref('');
        const selectedToolId = ref(null);

        function addTool() {
            const newTool = {
                id: tools.value.length + 1,
                name: newToolName.value,
            };
            tools.value.push(newTool);
            newToolName.value = '';
        }

        function deleteTool(index) {
            tools.value.splice(index, 1);
        }

        function addToolToDrawer(drawerIndex) {
            const selectedTool = tools.value.find((tool) => tool.id === selectedToolId.value);
            if (selectedTool) {
                drawers.value[drawerIndex].tools.push(selectedTool);
            }
        }

        function deleteToolFromDrawer(toolIndex, drawer) {
            drawer.tools.splice(toolIndex, 1);
        }

        return {
            tools,
            drawers,
            newToolName,
            selectedToolId,
            addTool,
            deleteTool,
            addToolToDrawer,
            deleteToolFromDrawer,
        };
    },
};
</script>

<style>
/* Apply padding to top and bottom of the component */
.q-pa-md {
    padding-top: 24px;
    padding-bottom: 24px;
}

/* Center the component horizontally */
#app {
    display: flex;
    justify-content: center;
}

/* Center the h1 element vertically */
.text-h3 {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}

/* Add a margin below the h2 elements */
.text-h5 {
    margin-bottom: 8px;
}
</style>