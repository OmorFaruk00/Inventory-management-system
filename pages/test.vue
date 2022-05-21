<template>
    <div>
        <h2>Aligned Dropdown Content</h2>
        <p>Use <strong>float: right</strong> on the dropdown class to float the dropdown menu to the right, and
            <strong>right:0</strong> on the dropdown-content if you want the dropdown content to go from right to left.
        </p>

        <div class="dropdown">
            <button @click="user()" class="dropbtn">Dropdown</button>
            <div id="user" class="dropdown-content">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </div>

    </div>

</template>
<script>
export default {
    methods:{
         user() {
            // alert("ok");
              document.getElementById("user").classList.toggle("show");
        }

        // Close the dropdown if the user clicks outside of it
        // window.onclick = function (event) {
        //     if (!event.target.matches('.dropbtn')) {
        //         var dropdowns = document.getElementsByClassName("dropdown-content");
        //         var i;
        //         for (i = 0; i < dropdowns.length; i++) {
        //             var openDropdown = dropdowns[i];
        //             if (openDropdown.classList.contains('show')) {
        //                 openDropdown.classList.remove('show');
        //             }
        //         }
        //     }
        // }
    }

}
</script>
<style>
.dropbtn {
    background-color: #04AA6D;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropbtn:hover,
.dropbtn:focus {
    background-color: #3e8e41;
}

.dropdown {
    float: right;
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    right: 0;
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown a:hover {
    background-color: #ddd;
}

.show {
    display: block;
}
</style>