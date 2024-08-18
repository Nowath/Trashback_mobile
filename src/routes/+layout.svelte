<script>
    import "../app.css";
</script>
<div class="EE relative w-screen h-screen bg-gradient-to-t from-[#97fe9b] to-[#acffaf] flex flex-col justify-center items-center">
    <slot />
</div>
<style>
    .EE::before{
        position:absolute;
        content: 'Only for Mobile';
        width: 100vw;
        height: 100vh;
        top:0;
        left:0;
        background-color: black;
        z-index: 2;
        color:white;
        display:flex;
        justify-content: center;
        align-items:center;
        font-size:5rem;
        text-align: center;
    }
    @media (max-width: 800px) {
        .EE::before {
            display:none !important;
        }
    }
</style>