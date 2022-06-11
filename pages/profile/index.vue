<template>
    <div class="profile">
        <div class="container pt-5">
            <div class="d-flex justify-content-center">
                <div class="profile-body">
                    <h2 class="text-center pb-4 font-weight-bold">Profile</h2>
                    <hr>
                    <div class="text-center py-3">                        
                        <img :src="'http://localhost:8000/images/emp/'+$auth.user.profile_photo" alt="image" width="200" class="rounded-circle"/>
                    </div>
                    <div class="text-center mt-3">
                        <h4 class=" mb-2">{{$auth.user.name}}</h4>
                        <h6>{{$auth.user.rel_designation.designation}}</h6>
                        <ul class="social">
                            <li>
                                 <a href="#" ><img src="/images/fb.png" alt="" class="social-icon"></a>
                            </li>
                            <li>
                                <a href="#" ><img src="/images/twi.png" alt="" class="social-icon"></a>
                            </li>
                            <li>
                                 <a href="#" ><img src="/images/ins.png" alt="" class="social-icon"></a>
                            </li>
                            <li>
                                 <a href="#" ><img src="/images/google.png" alt="" class="social-icon"></a>
                            </li>
                        </ul>
                        <div class="contact-info">
                            <h6>E-mail :
                                <small>{{$auth.user.email}}</small>
                            </h6>
                            <h6>Phone :
                                <small>{{$auth.user.personal_phone_no}}</small>
                            </h6>
                            <h6>Mobile :
                               <small>{{$auth.user.alternative_phone_no}}</small>
                            </h6>
                        </div>
                        <hr>
                        <div class="profile-info">
                            <div class="about">
                                <h4 class="about-title">About</h4>
                                <p class="about-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Eveniet, quas aspernatur. Deleniti, autem. Facere error natus odio repudiandae,
                                    iusto quibusdam repellendus! Ullam nihil est unde cumque, voluptate eveniet
                                    quidem dolore, culpa possimus minima dignissimos ducimus aliquam molestiae velit
                                    sed non!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
            <script>
export default {
    layout: "Profile-content"
}
</script>
            <style scoped>


.profile-body {
    border: none;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    background: #fff;
    padding: 50px 0px;
    margin-bottom: 80px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.profile-body:hover::after {
    transform: scaleY(1)
}

.profile-info {
    padding: 0px 100px;
}

.contact-info {
    display: flex;
    justify-content: space-around;
}

.about {
    font-size: 15px;
    text-align: justify;
    padding-bottom: 20px;
    box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
}

.about-title {
    padding: 10px 20px;

}

.about-desc {
    padding: 0px 20px;

}

.social {
    padding: 0;
    margin: 0;
    list-style: none;
}

.social li {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
}

.social-icon{
    display: block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    border-radius: 50%;
    background: #fff;
    font-size: 20px;
    color: #4c5462;
    margin-right: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease 0s;
}

.social-icon:hover {
    background: linear-gradient(to right, #7851a9 0%, #ffd700 100%);
    color: #fff;
}

@media only screen and (max-width: 590px) {
    .profile-info {
        padding: 0px 10px;
    }

    .contact-info {
        display: block;
        justify-content: space-between;
        text-align: center;

    }
}
</style>