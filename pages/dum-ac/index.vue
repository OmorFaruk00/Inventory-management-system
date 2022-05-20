<template>
    <div>

        <div class="text-center py-5">
            <h2>Welcome To Darul Uloom Moniram</h2>
        </div>
        <div class="">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <nuxt-link to="/dum-ac/event">
                    <div class="dashboard">
                        <div class="dashboard-icon"><i class="fa fa-globe"></i></div>
                        <h3>Event</h3>
                        <span class="dashboard-value">50</span>
                    </div>
                    </nuxt-link>
                </div>
                <div class="col-md-3 col-sm-6">
                    <nuxt-link to="/dum-ac/notice">
                    <div class="dashboard purple">
                        <div class="dashboard-icon"><i class="fa fa-rocket"></i></div>
                        <h3>Notice</h3>
                        <span class="dashboard-value">100</span>
                    </div>
                    </nuxt-link>
                </div>
                <div class="col-md-3 col-sm-6">
                    <nuxt-link to="/dum-ac/program">
                    <div class="dashboard green">
                        <div class="dashboard-icon"><i class="fa fa-rocket"></i></div>
                        <h3>Program</h3>
                        <span class="dashboard-value">20</span>
                    </div>
                     </nuxt-link>
                    
                </div>
                <div class="col-md-3 col-sm-6">
                    <nuxt-link to="/dum-ac/slider">
                    <div class="dashboard yellow">
                        <div class="dashboard-icon"><i class="fa fa-rocket"></i></div>
                        <h3>Slider</h3>
                        <span class="dashboard-value">5</span>
                    </div>
                     </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Dum-sidebar"

}
</script>
<style scoped>
.dashboard {
    color: #fff;
    background: rgba(40, 172, 227, 0.3);
    font-family: 'Dosis', sans-serif;
    text-align: center;
    width: 210px;
    height: 210px;
    padding: 17px 30px 25px 0;
    margin: 0 auto;
    border-radius: 40px;
    position: relative;
    z-index: 1;
}

.dashboard:before {
    content: '';
    background: linear-gradient(#1ca9e6, #0782b3);
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: 5px solid #fff;
    position: absolute;
    top: -15px;
    left: -15px;
    z-index: -1;
}

.dashboard .dashboard-icon {
    font-size: 35px;
    margin: 0 0 15px;
}

.dashboard h3 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin: 0 0 12px;
    color: #fff;
}

.dashboard .dashboard-value {
    font-size: 30px;
    font-weight: 600;
    display: block;
}

.dashboard.purple {
    background: rgba(47, 49, 148, 0.3);
}

.dashboard.purple:before {
    background: linear-gradient(#4143ac, #0c0f64);
}

.dashboard.green {
    background: rgba(9, 61, 2, 0.3);
}

.dashboard.green:before {
    background: linear-gradient(#0c651b, #03b82d);
}

.dashboard.yellow {
    background: rgba(249, 141, 31, 0.3);
}

.dashboard.yellow:before {
    background: linear-gradient(#f19935, #c76d05);
}

@media screen and (max-width:990px) {
    .dashboard {
        margin-bottom: 40px;
    }
}
</style>