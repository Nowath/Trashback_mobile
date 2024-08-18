<script>
// @ts-nocheck
    export let data;
    import { phoneInput } from '../../stores/phoneStore';
    import morse from "morse";
    let Data = data.database;

    let currentPhoneInput;
    phoneInput.subscribe(value => {
        currentPhoneInput = value;
    });
    let MorsePhone = morse.encode(currentPhoneInput);
    let Point = Data.find(item => item.phone === MorsePhone);
    
</script>

<div class="All flex flex-col justify-center items-center gap-20">
    <h1 class="text-5xl">Your Point Is:</h1>
    <h1 class=" text-9xl">{Point.point}</h1>
    <h1 class="text-2xl">Your Number is {currentPhoneInput}</h1>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400..700&display=swap');
    .All{
        font-family: "Edu VIC WA NT Beginner", cursive;
        font-weight: 700;
    }
</style>