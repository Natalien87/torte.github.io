<?php include 'nav.php'; ?>
 <div class="contact container"> 
     <h3 class="text-center text-dark pb-5">Za vise informacija posaljite nam poruku</h3>
    <form action="https://formsubmit.co/saranovicbranka@gmail.com" method="POST">
        <div class="form-group">
            <div class="form-row">
                <div class="col">
                    <input type="text" name="name" class="form-control" placeholder="Full Name" required>
                </div>
                <div class="col">
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required>
                </div>
            </div>
        </div>
        <div class="form-group">
            <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
        </div>
        <button type="submit" class="btn">Pošaljite poruku</button>
    </form>
</div>
<?php include 'footer.php'; ?>