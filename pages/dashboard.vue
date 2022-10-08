<template>
    <div class="p-5">

     
        <div class="row">
            <div class="col-12 col-md-6 col-xl-3">
                <nuxt-link to="/#">
                    <div class="d-flex justify-content-between d-card">
                        <div class="d-content">
                            <h6>Today's Users</h6>
                            <h4>$5000</h4>
                        </div>
                        <div class="d-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <nuxt-link to="/#">
                    <div class="d-flex justify-content-between d-card">
                        <div class="d-content">
                            <h6>Today's Users</h6>
                            <h4>$5000</h4>
                        </div>
                        <div class="d-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <nuxt-link to="/#">
                    <div class="d-flex justify-content-between d-card">
                        <div class="d-content">
                            <h6>Today's Users</h6>
                            <h4>$5000</h4>
                        </div>
                        <div class="d-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <nuxt-link to="/#">
                    <div class="d-flex justify-content-between d-card">
                        <div class="d-content">
                            <h6>Today's Users</h6>
                            <h4>$5000</h4>
                        </div>
                        <div class="d-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    layout: "Sidebar",
};
</script>
<style lang="scss" scoped>
.d-card {
    border-radius: 15px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
        rgba(17, 17, 26, 0.05) 0px 8px 32px;
    padding: 20px;
    margin-bottom: 30px;
}

.d-content h6 {
    color: #555;
}

.d-content h4 {
    font-weight: 500;
    color: #000;
}

.d-icon {
    background: linear-gradient(#00c6ff, #596cff);
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
        rgba(17, 17, 26, 0.05) 0px 8px 32px;
    // box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}

.d-icon svg {
    padding: 10px;
    height: 60px;
    width: 60px;
    color: #fff;
}
</style>