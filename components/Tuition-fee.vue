<template>
    <div class="tuition">
        <div id="main">
            <div class="container">
                <h2 class="title pb-5">FEE</h2>
                <div class="accordion" id="faq">
                    <div class="card">
                        <div class="card-header" id="faqhead1">
                            <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#faq1"
                                aria-expanded="true" aria-controls="faq1">Residential</a>
                        </div>

                        <div id="faq1" class="collapse" aria-labelledby="faqhead1" data-parent="#faq">
                            <div class="card-body">
                                 <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Sl. No.</th>
                                            <th>Name of Program</th>
                                            <th>Duration</th>
                                            <th>Total Fees (BDT)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Ibtedayi</td>
                                            <td>1 years</td>
                                            <td>10000</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Dakhil</td>
                                            <td>2 years</td>
                                            <td>10000</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Alim</td>
                                            <td>2 years</td>
                                            <td>10000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="faqhead2">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                                aria-expanded="true" aria-controls="faq2">Non-resident</a>
                        </div>

                        <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                            <div class="card-body">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Sl. No.</th>
                                            <th>Name of Program</th>
                                            <th>Duration</th>
                                            <th>Total Fees (BDT)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Ibtedayi</td>
                                            <td>1 years</td>
                                            <td>10000</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Dakhil</td>
                                            <td>2 years</td>
                                            <td>10000</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Alim</td>
                                            <td>2 years</td>
                                            <td>10000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="faqhead3">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3"
                                aria-expanded="true" aria-controls="faq3">Day Care</a>
                        </div>

                        <div id="faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                            <div class="card-body">
                                 <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Sl. No.</th>
                                            <th>Name of Program</th>
                                            <th>Duration</th>
                                            <th>Total Fees (BDT)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Ibtedayi</td>
                                            <td>1 years</td>
                                            <td>10000</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Dakhil</td>
                                            <td>2 years</td>
                                            <td>10000</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Alim</td>
                                            <td>2 years</td>
                                            <td>10000</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                   

                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.tuition {
    background-color: hsl(60, 22%, 96%);
    padding: 70px;
}

/* #main {
  margin: 50px 0;
  padding: 70px !important;
} */

#main #faq .card {
    margin-bottom: 30px;
    border: 0;
}

#main #faq .card .card-header {
    border: 0;
    -webkit-box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
    box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
    border-radius: 5px;
    padding: 0;

}

.card-header a {
    font-size: 20px;
    font-weight: 400;

}

#main #faq .card .card-header .btn-header-link {
    color: #fff;
    display: block;
    text-align: left;
    background: #fff;
    color: #222;
    padding: 15px;
}

#main #faq .card .card-header .btn-header-link:after {
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    float: right;
}

#main #faq .card .card-header .btn-header-link.collapsed {
    background: #fff;
    color: rgb(14, 5, 5);
}

#main #faq .card .card-header .btn-header-link.collapsed:after {
    content: "\f106";
}

#main #faq .card .collapsing {
    background: #fff;
    line-height: 30px;
}

#main #faq .card .collapse {
    border: 0;
}

#main #faq .card .collapse.show {
    background: #fff;
    line-height: 30px;
    color: #222;
}
@media only screen and (max-width: 767px) {
    .tuition{
        padding: 10px;
    }
}
</style>