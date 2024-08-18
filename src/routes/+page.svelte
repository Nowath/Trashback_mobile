<script>
// @ts-nocheck
    export let data;
    import { phoneInput } from '../stores/phoneStore.js';
    import { goto } from '$app/navigation';
    import morse from "morse";
    let Phone_morse = data.database;
    let Phone_input = null;
    let text_toast = "";
    let Type = "";
    import ShowToast from "../components/Toast.svelte";
    const Phone = Phone_morse.map(item => (morse.decode(item.phone)))
    import logo from "../img/Trash_Back.png"
    import { scale } from "svelte/transition";
    let show;

    function Check(){
        phoneInput.set(Phone_input);
        if(Phone_input === null || Phone_input === 0){
            text_toast = 'Press Input Your number';
            Type = 'error';
            show.showToast(text_toast,Type)
        }else if(Phone_input.length < 10){
            text_toast = 'Press Input Your Number Correctly';
            Type = 'info';
            show.showToast(text_toast,Type)
        }else{
            if(Phone.includes(Phone_input) == true){
                text_toast = 'Welcome';
                Type = 'success';
                show.showToast(text_toast,Type)
                goto('/main');
            }else{
                text_toast = 'Not have Account';
                Type = 'error';
                show.showToast(text_toast,Type)
            }
        }
    }
    
</script>
<div class="w-full h-full flex flex-col justify-center items-center">
    <ShowToast bind:this={show} />
    <img class=" absolute top-0" src={logo} width="250px" alt="">
    <div class="w-full h-4/5 flex flex-col justify-between items-center">
        <div class="logo">
            
        </div>
        <div class="Login p-4 bg-[rgba(255,255,255,0.84)] rounded-xl w-[80%] h-2/4 flex flex-col justify-between items-center">
            <h2 class="text-2xl">Login</h2>
            <div class="flex flex-col w-full justify-center items-center gap-4">
                <input on:change={(e) => Phone_input = e.target.value} type="number" value={Phone_input} class=" bg-[#97fe9b] w-11/12 h-10 rounded-full outline-sky-300 px-2" placeholder="Phone number">
                <button on:click={() => Check()} class="hover:scale-[1.1] transition-all bg-[#0f7e2b] text-white px-16 py-2 rounded-md">Login</button>
            </div> 
            <div class="flex gap-1">
                <p>Have accout? </p>
                <a href="/signup" class="text-blue-500 underline">Sign-up</a>
            </div>
        </div>
        <footer></footer>
    </div>
</div>

