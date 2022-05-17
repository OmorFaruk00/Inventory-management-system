<template>
    <div class="admission-bg">
        <div class="admission">
            <h2 class="title"> ADMISSION</h2>
            <p class="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
                cumque!
            </p>
        </div>

        <div class="container pb-5">
            <h2 class="title pb-5">WELCOME TO OUR ADMISSION</h2>
            <div class="row pb-5">
                <div class="col-md-12">
                    <div class="main-timeline">
                        <div class="timeline">
                            <div class="timeline-content">
                                <span class="post">Admission Eligibility</span>
                                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aspernatur aut deleniti fugiat eveniet nesciunt voluptatem excepturi voluptatum cupiditate dignissimos facere harum dolorem alias quae optio iusto illum amet et nam corrupti, repudiandae, nulla consectetur? Perspiciatis ipsum sed cum veritatis similique perferendis earum laudantium, consectetur dolores consequatur ducimus nam nihil suscipit cumque esse aliquam beatae explicabo temporibus modi molestias reiciendis amet! Velit ab provident qui asperiores in laborum numquam facere eligendi atque quae vero cupiditate ducimus blanditiis, iste, maiores facilis eaque similique veniam, aut maxime magnam! Id, odit maiores facere tenetur aliquam amet quia beatae sequi est. Quisquam, debitis unde.</p>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="timeline-content">
                                
                                <span class="post">Required Documents</span>
                                
                                <div class="document">
                                    <ul>
                                        <li> Original Transcript & Certificate of S.S.C. or Equivalent with 2 photocopies.</li>
                                        <li>  Original Transcript & Certificate of H.S.C. or Equivalent with 2 photocopies.</li>
                                        <li>7 Copies of Pass Port size Photograph .</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
         <Tuition-fee />


    </div>
</template>
<style scope>
.admission-bg{
    background:#fff;
}
.admission {
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.7) 100%),
        url("/images/slider4.jpg");
    background-size: cover;
    height: 200px !important;
    background-position: bottom;
    margin-bottom: 80px;
}

.admission h2 {
    text-align: center;
    padding-top: 40px;
    font-size: 45px;
    color: #fff;
}

.admission p {
    text-align: center;
    padding-top: 10px;
    font-size: 18px;
    color: #fff;
}
.document ul li{
    list-style: square;
    /* list-style-type: "\1F44D"; */

}

.main-timeline {
    position: relative;
}

.main-timeline:before,
.main-timeline:after {
    content: "";
    display: block;
    width: 100%;
    clear: both;
}

.main-timeline:before {
    width: 2px;
    height: 100%;
    background: #e5e9ed;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.main-timeline .timeline {
    width: 50%;
    padding-right: 30px;
    float: left;
    position: relative;
}

.main-timeline .timeline:last-child {
    margin-bottom: 0;
}

.main-timeline .timeline:after {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #e5e9ed;
    position: absolute;
    top: 0;
    right: -6px;
    transition: all 0.3s ease 0s;
}

.main-timeline .timeline:hover:after {
    background: #e3b457;
    transform: scale(1.3);
}

.main-timeline .timeline-content {
    padding: 50px 40px;
    background: #e5e9ed;
    position: relative;
    transition: all 0.3s ease 0s;
}

.main-timeline .timeline-content:hover {
    background: #e3b457;
    color: #fff;
}

.main-timeline .timeline-content:after {
    content: "";
    border-top: 30px solid #e5e9ed;
    border-right: 15px solid transparent;
    position: absolute;
    top: 0;
    right: -15px;
    transition: all 0.3s ease 0s;
}

.main-timeline .timeline-content:hover:after {
    border-top-color: #e3b457;
}

.main-timeline .year {
    display: block;
    font-size: 24px;
    color: #e3b457;
    line-height: 32px;
    margin: 0;
    transition: all 0.3s ease 0s;
}

.main-timeline .post {
    display: block;
    font-size: 20px;
    color: #22272c;
    padding-bottom: 8px;
    margin: 8px 0 15px 0;
    position: relative;
}

.main-timeline .post:after {
    content: "";
    display: block;
    width: 30px;
    border-top: 2px solid #22272c;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease 0s;
}

.main-timeline .timeline-content:hover .post:after {
    border-top-color: #fff;
}

.main-timeline .title {
    font-size: 18px;
    font-weight: 500;
    color: #e3b457;
    text-transform: capitalize;
    transition: all 0.3s ease 0s;
}

.main-timeline .description {
    font-size: 14px;
    color: #7a7e82;
    line-height: 25px;
}

.main-timeline .timeline-content:hover .year,
.main-timeline .timeline-content:hover .title,
.main-timeline .timeline-content:hover .description {
    color: #fff;
}

.main-timeline .timeline:nth-child(2n) {
    padding: 0 0 0 30px;
    margin-top: 75px;
}

.main-timeline .timeline:nth-child(2n):after {
    right: auto;
    left: -6px;
}

.main-timeline .timeline:nth-child(2n) .timeline-content:after {
    border-left: 15px solid transparent;
    border-right: none;
    left: -15px;
    right: auto;
}

@media only screen and (max-width: 767px) {
    .main-timeline:before {
        margin: 0;
        left: 0;
    }

    .main-timeline .timeline {
        width: 100%;
        float: none;
        padding: 0 0 0 30px;
        margin-bottom: 20px;
    }

    .main-timeline .timeline:after {
        right: auto;
        left: -6px;
    }

    .main-timeline .timeline-content {
        padding: 20px;
    }

    .main-timeline .timeline-content:after {
        border-left: 15px solid transparent;
        border-right: none;
        left: -15px;
        right: auto;
    }

    .main-timeline .timeline:nth-child(2n) {
        margin-top: 0;
    }
}
</style>