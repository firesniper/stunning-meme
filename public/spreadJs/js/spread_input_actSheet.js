+function ()
{
    var fn_modifyActSheetName = function ( params )
    {
        var pgp_activeSheet = params && params.pgp_activeSheet ? params.pgp_activeSheet :
            $workBook.getActiveSheet () ;
        var pgp_selectCell = params && params.pgp_selectCell ? params.pgp_selectCell : pgp_activeSheet.getCell ( 2 , 0 ) ;
        if ( pgp_selectCell.text ( ) )
        {
            pgp_activeSheet.name ( pgp_selectCell.text ( ) ) ;
            // pgp_activeSheet.Cj = pgp_activeSheet.getValue ( 2 , 0 ) ;
            localStorage.activeSheetCj = pgp_selectCell.text ( ) ;

        } ;
    } ;
    var spread_input_actSheet = function ( params ) 
    {
        var pgp_spread = params && params.pgp_spread ? params.pgp_spread : $workBook ;
        var fn_modifyCellCb = function() {} ;

        function fn_actSheetHandle ( params ) 
        {
            
            // 获得当前激活的标签页
            var pgp_activeSheet =  params && params.pgp_activeSheet ? params.pgp_activeSheet : pgp_spread.getActiveSheet () ;
            var fn_cb = params && params.fn_cb ? params.fn_cb : function () {} ;

            console.log ( "pgp_activeSheet:" , pgp_activeSheet ) ;
            console.log ( "pgp_activeSheet.tag():" , pgp_activeSheet.tag() ) ;

            console.log ( "pgp_activeSheet.Cj:" , pgp_activeSheet.Cj ) ;
            console.log ( "pgp_activeSheet.getCell(2, 0):" , pgp_activeSheet.getCell(2, 0) ) ;
            /*var sheet1 = pgp_spread.getSheet(0) ;
            console.log ( "sheet1 == pgp_activeSheet:" , sheet1 == pgp_activeSheet ) ;*/
            // console.log ( "sheet1:" , sheet1 ) ;
            // var str_activeSheetCj = localStorage.activeSheetCj ;
            
            // var any_storage = 
            // 13234 ;
            // ( any_storage = sessionStorage.getItem ( "activeSheetCj" ) ) ?  any_storage : "912831" ;
            // pgp_activeSheet.getCell(2, 0).value ( any_storage ) ; 


            function  keyDownCb ( str_txt1 )
            {
                // console.log ( "pgp_activeSheet.Cj:" , pgp_activeSheet.Cj ) ;
                // sessionStorage.setItem ( "activeSheetCj" , "str_txt1" ) ;
                // localStorage.activeSheetCj =  str_txt1  ; 
                // any_storage = str_txt1 ;
                // console.log ( "any_storage:" , any_storage ) ;
                // pgp_spread.repaint () ;
                // pgp_spread.suspendPaint();
                // pgp_spread.resumePaint () ;
                // pgp_spread.refresh () ;
                console.log ( "str_txt1 :" , pgp_activeSheet.getCell(0, 2).text() ) ;

            } ; 
            var Events = GC.Spread.Sheets.Events ;
            // console.log ( "activeSheetChanged:" , Events.activeSheetChanged ) ;
            console.log ( "Events:" , Events ) ;
            
            /*pgp_activeSheet.Cj = 
            // "skldfj"
            localStorage.activeSheetCj ;*/
            // pgp_activeSheet.name ( localStorage.activeSheetCj ) ;
            // document.addEventListener 
            var bol_CellChangeLock = false ;

            pgp_activeSheet.bind
            // document.addEventListener 
            (
                // "keyup" ,
                Events.CellClick ,
                function ( e , args )
                {
                    console.log ( "CellClick e " , e  ) ;
                    console.log ( "CellClick args " , args  ) ;
                    console.log ( "CellClick this " , this  ) ;
                    var fn_modifyCellHandle = function ( params )
                    {
                        var args = params && params.args ? params.args : args ;
                        var fn_cb = params && params.fn_cb ? params.fn_cb : function () {} ;

                        // args.newValue = args.editingText ? args.editingText : args.newValue ;
                        if ( bol_CellChangeLock ) return ; 
                        bol_CellChangeLock = true ;
                        // pgp_spread event
                        //do some thing...
                        
                        // pgp_activeSheet.suspendPaint();
                        
                        // pgp_activeSheet.setValue ( args.col , args.row , args.newValue ) ;
                        var pgp_actCell = pgp_activeSheet.getCell ( args.row , args.col ) ;
                        console.log ( "pgp_actCell:" , pgp_actCell ) ;
                        pgp_actCell.value ( args.editingText ) ;
                        console.log ( "pgp_activeSheet.getValue:" ,  pgp_activeSheet.getValue ( args.col , args.row ) ) ;

                        /*var pgp_selectCell =  pgp_activeSheet.getCell ( 2 , 0 ) ;
                        if ( pgp_selectCell.text ( ) )
                        {
                            pgp_activeSheet.name ( pgp_selectCell.text ( ) ) ;
                            // pgp_activeSheet.Cj = pgp_activeSheet.getValue ( 2 , 0 ) ;
                            localStorage.activeSheetCj = pgp_selectCell.text ( ) ;

                        } ;*/
                        // console.log ( "fn_cb:" , fn_cb ) ;
                        fn_modifyCellCb ( { pgp_activeSheet : pgp_activeSheet } ) ;
                        /*var str_sec = new Date ().getSeconds().toString ().slice ( -1 ) ;
                        if ( !sessionStorage.getItem ( "toggle" ) || isNaN ( sessionStorage.getItem ( "toggle" ) ) )
                        {
                            sessionStorage.setItem ( "toggle" , 0 ) ;
                        }
                        else 
                        {
                            var num_toggle = Math.cell ( sessionStorage.getItem ( "toggle" ) ) ;
                            var bol_toggle = num_toggle ? 0 : 1 ;
                            sessionStorage.setItem 
                            ( 
                                "toggle" , bol_toggle 
                            )
                        } ;
                        if ( sessionStorage.getItem ( "toggle" ) ) 
                        {
                            localStorage.activeSheetCj = pgp_activeSheet.getValue ( 0 , 2 ) ;
                        }
                        else
                        {
                                localStorage.activeSheetCj = pgp_activeSheet.getValue ( 2 , 0 ) 
                        } ;*/
                        // pgp_activeSheet.resumePaint();
                        var str_json = JSON.stringify 
                        (
                            pgp_spread.toJSON ( { includeBindingSource: true } ) 
                        ) ;
                        localStorage.str_spread_json = str_json ;
                        
                        var st_a01 = setTimeout 
                        (
                            function ()
                            {
                                bol_CellChangeLock = false ;
                                // clearTimeout ( st_a01 ) ;
                            } ,
                            0
                        ) ;
                    } ;
                    
                    pgp_activeSheet.bind
                    (
                        Events.EditEnded , 
                        function ( e , args ) 
                        { 
                            console.log ( "EditStarting e:" , e ) ;
                            console.log ( "EditStarting args:" , args ) ;
                            console.log ( "EditStarting this:" , this ) ;
                            fn_modifyCellHandle ( { args : args , fn_cb : fn_cb } ) ;
                        }
                    ) ;
                    pgp_activeSheet.bind
                    (
                        Events.CellChanged , 
                        function ( e , args ) 
                        { 
                            console.log ( "CellChanged e:" ,  e ) ;
                            console.log ( "CellChanged args:" , args ) ;
                            console.log ( "CellChanged this:" , this ) ;
                            if ( bol_CellChangeLock ) return ; 
                            /*bol_CellChangeLock = true ;
                            var st_a01 = setTimeout 
                            (
                                function ()
                                {
                                    bol_CellChangeLock = false ;
                                    // clearTimeout ( st_a01 ) ;
                                } ,
                                0
                            ) ;*/

                        }
                    ) ;
                    var str_txt1 = pgp_activeSheet.getCell(0, 2).text() ;
                    if ( event.code != "ControlRight" ) return ; 
                    console.log ( "event:" , event ) ;
                    
                    
                    pgp_activeSheet.resumePaint () ;
                    // pgp_activeSheet.repaint () ;
                    // pgp_spread.refresh () ;
                    console.log ( "pgp_activeSheet.getValue( 2 , 0 ):" ,  pgp_activeSheet.getValue ( 2 , 0 ) ) ;
                    console.log ( "pgp_activeSheet.getValue( 0 , 2 ) :" ,  pgp_activeSheet.getValue ( 0 , 2 ) ) ;

                    // localStorage.str_json = str_json ;
                    var st01 = setTimeout 
                    (
                        function ( event )
                        {
                            
                            // keyDownCb ( str_txt1 ) ;
                        } ,
                        3000

                    ) ;
                    // clearTimeout ( st01 ) ;
                    // console.log ( "pgp_activeSheet.Cj:" , pgp_activeSheet.Cj ) ;

                    /*any_storage = pgp_activeSheet.getCell(2, 0).text () ;
                    console.log ( "any_storage:" , any_storage ) ;*/
                    
                    
                    
                    

                }
            ) ;
            
        } ;
        var num_actSheetIdx = pgp_spread.getActiveSheetIndex ( ) ;
        if ( num_actSheetIdx == 2 ) 
        { 
            fn_modifyCellCb = fn_modifyActSheetName ; 
        }
        else
        {
            fn_modifyCellCb = function () {} ;
        } ;
        fn_actSheetHandle 
        ( 
            { 
                pgp_spread : pgp_spread ,
                // pgp_activeSheet : pgp_spread.getActiveSheet () 
            } 
        ) ;
        var spreadNS = GC.Spread.Sheets ;
        var Events = spreadNS.Events ;
        pgp_spread.bind 
        (
            Events.ActiveSheetChanged ,
            function ( e , args ) 
            {
                console.log ( "ActiveSheetChanged e:" , e ) ;
                console.log ( "ActiveSheetChanged args:" , args ) ;
                var num_actSheetIdx = pgp_spread.getActiveSheetIndex ( ) ;
                var fn_cb = function () {} ;
                
                if ( num_actSheetIdx == 2 ) 
                {
                    fn_modifyCellCb = fn_modifyActSheetName ;
                }
                else
                {
                    fn_modifyCellCb = function () {} ;
                } ;
                fn_actSheetHandle 
                ( 
                    { 
                        // e : e , 
                        // args : args ,
                        pgp_spread : pgp_spread ,
                        fn_cb : fn_cb 
                        // pgp_activeSheet : pgp_spread.getActiveSheet () 
                    }
                ) ;
            }
        ) ;


    } ;

    Object.defineProperties
    (
        window ,
        {
            "spread_input_actSheet" :
            {
                enumerable : false ,
                configurable : true ,
                writable : true ,
                value : spread_input_actSheet 
            }
        }
    ) ;
    
} () ;