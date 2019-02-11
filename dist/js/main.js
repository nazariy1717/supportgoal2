let frontend ={
    init: function(){
        this.events();
    },
    events: function(){
        $('#check_all').click(function(event) {
            if(this.checked) {
                $(':checkbox').each(function() {
                    this.checked = true;
                });
            } else {
                $(':checkbox').each(function() {
                    this.checked = false;
                });
            }
        });

        $(document).on('click', '.header-toggle', function(){
           $('.sidebar').toggleClass('active');
        });
    }
};

frontend.init();

