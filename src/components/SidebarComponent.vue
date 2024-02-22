<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div
                    v-if="isPanelOpen"
                    class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
    import { useToggleStore } from '@/stores/store.js'
    export default {
        data: () => ({
            toggle_store: useToggleStore()
        }),
        methods: {
            closeSidebarPanel() {
                this.$emit('close_offerts')
                this.toggle_store.toggleNavbar()

            }
        },
        computed: {
            isPanelOpen() {
                return this.toggle_store.toggle
            }
        }
    }
</script>
<style>
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter-from {
        transform: translateY(-100%);
        transition: all 150ms ease-in 0s
    }
    
    .slide-leave-to {
        transform: translateY(-100%);
        transition: all 250ms ease-in 0s
    }

    .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 1;
    }

    .sidebar-panel {
        overflow-y: auto;
        background-color: #ffffff;
        position: fixed;
        left:0;
        /* left: calc(100vw - 250px); */
        top: 0;
        height: auto;
        z-index: 999;
        padding: 3rem 30px 2rem 20px;
        width: calc(100vw - 50px);
        border-radius: 0 0 8% 8%;
    }

    .displayNone {
        display: none;
    }
</style>