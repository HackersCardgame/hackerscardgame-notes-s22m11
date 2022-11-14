   jQuery(document).ready(function ($) {
		
        $(document).on('click',".tabs",function () {
            $(".tabs").removeClass("active");
            $(".tabs h6").removeClass("font-weight-bold");
            $(".tabs h6").addClass("text-muted");
            $(this).children("h6").removeClass("text-muted");
            $(this).children("h6").addClass("font-weight-bold");
            $(this).addClass("active");
    
            current_fs = $(".active");
    
            next_fs = $(this).attr("id");
            next_fs = "#" + next_fs + "1";
    
            $("wsfieldset").removeClass("show");
            $(next_fs).addClass("show");
    
            current_fs.animate(
                {},
                {
                    step: function () {
                        current_fs.css({
                            display: "none",
                            position: "relative",
                        });
                        next_fs.css({
                            display: "block",
                        });
                    },
                }
            );
        });
    });

    async function cekArtikelHash(id_post){
		jQuery("#overlay").css("display", "block")
		jQuery(".centered").css("display", "block")
		jQuery(".text-wsloader").css("display", "block")
		
        var data = {
            'action': 'verify',
            'id_post' : id_post
        };
    
        let changedArticle = null;
    
        try{
            let changedArticleRes = await fetch(`${location.protocol + "//" + location.host}/wp-content/plugins/wordstamp/json/${id_post}.json`);
            changedArticle = await changedArticleRes.json();
        }catch(e){
            changedArticle = null;
        }
    
        
    
        jQuery.post(url_admin.ajax_url, data, function (response){
			
                let oJ = JSON.parse(response);
                
    
                if(oJ.success){
                    let createdAt = new Date(oJ.data.createdAt);
       
                    (async() => {
                        let ipfsResult = await fetch(`https://gateway.pinata.cloud/ipfs/${oJ.data.ipfsHash}`);
                        let ipfsJson = await ipfsResult.json();
                        let element = document.getElementById("ex1");
                        if(element){
                            element.remove();
                        }
    
                        $(`
                        <div id="ex1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal fade text-left">
                            <div role="document" class="modal-dialog modal-lg">
                                <div class="wsmodal-content border-0">                                    
                                    <div class="modal-body p-0">
                                        <wsfieldset class="show" id="tab011">
                                            <p class="text-center wrstatus-identical text-uppercase">Certificate and timestamp are valid</p>
                                                <div class="form-group col-12 pb-0 px-4 pt-2">
                                                    <div class="col-12 border-0 font-weight-bolder text-center" style="font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-size:16px;">${oJ.data.name}</div>
                                                </div>
                                                <div class="wsrow center pt-2">
                                                    <div class="form-group col-6 pb-0 px-4 mb-2">
                                                        <div class="text-center mb-2" style="font-family: 'Open Sans', sans-serif;font-size:14px;">Original Version</div>
                                                        <div class="wsform-control display-content"><div id="display2"></div></div>
                                                    </div>
                                                    <div class="form-group col-6 pb-0 px-4 mb-2">
                                                        <div class="text-center mb-2" style="font-family: 'Open Sans', sans-serif;font-size:14px;">Changed Version</div>
                                                        <div class="wsform-control display-content"><div id="display"></div></div>
                                                    </div>
                                                </div>
                                                <div class="wsrow center pt-0">
                                                    <div class="form-group col-6 pb-0 px-4 mb-2">
                                                        <div class="text-left mb-2" style="font-family: 'Open Sans', sans-serif;font-size:13px;">Signee</div>
                                                        <input type="text" class="col-12 text-muted text-uppercase mb-2 border-0" value="${oJ.data.pubkey}" style="font-family: monospace;font-size:13px;" disabled>
                                                    </div>
                                                    <div class="form-group col-6 pb-0 px-4 mb-2">
                                                        <div class="text-left mb-2" style="font-family: 'Open Sans', sans-serif;font-size:13px;; ">Fingerprint</div>
                                                        <input type="text" class="col-12 text-muted text-uppercase mb-2 border-0" value="${oJ.data.hash}" style="font-family: monospace;font-size:13px;" disabled>
                                                    </div>
                                                </div>
                                                <div class="wsrow center pt-0">
                                                    <div class="form-group col-6 pb-0 px-4 mb-2">
                                                        <div class="text-left mb-2" style="font-family: 'Open Sans', sans-serif;font-size:13px;">Timestamp</div>
                                                        <input type="text" class="col-12 text-muted mb-2 border-0" value="${ createdAt.toDateString() } - ${ createdAt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }" style="font-family: monospace;font-size:13px;" disabled>
                                                    </div>
                                                    <div class="form-group col-6 pb-0 px-4 mb-2">
                                                        <div class="text-left mb-2" style="font-family: 'Open Sans', sans-serif;font-size:13px;">Vexanium Tx</div>
                                                        <input type="text" class="col-12 text-muted text-uppercase mb-2 border-0" value="${oJ.data.tx}" style="font-family: monospace;font-size:13px;" disabled>
                                                    </div>
                                                </div>
                                        </wsfieldset>
                                        <wsfieldset id="tab021">
                                            <p class="px-4 pt-4" style="color:#323232; font-family: 'Open Sans', sans-serif;font-size:16px;">Data manipulation is often named as a serious threat to data integrity. Data can be tampered with, and malicious actors could use this to their advantage. Data users in various application domains want to be ensured that the data they are consuming are accurate and have not been tampered with.<br/><br/>Stamping a file on the blockchain proves that the document existed at that particular point of time. If the user has signed the document before stamping, then he may undeniably claim that the document was in his possession at the time of the stamping.<br/><br/><b>Wordstamp</b> allows to every owner of website to protect his content by a certified certificate with a digital timestamp stored and certified by <a href="https://ipfs.io" target="_blank">IPFS</a> and <a href="https://vexanium.com" target="_blank">Vexanium</a> Blockchain.</p>
                                        </wsfieldset>
                                    </div>
                                    <div class="wsprimary">
                                        <div class="wsfooter border-0 text-uppercase"><a class="mr-4" href="https://explorer.vexanium.com/transaction/${oJ.data.tx}" target="_blank" style="color:white;">View on Blockchain</a></div>
                                    </div>
                                </div>                          
                        </div>`).appendTo('body').modal();
    
                        const original = ipfsJson.content,
                        changed = changedArticle ? changedArticle.content : ipfsJson.content,
                        color = '';
                        
                        let span = null;
    
                        const diff = Diff.diffChars(original, changed),
                            display = document.getElementById('display'),
                            fragment = document.createDocumentFragment();
        
                        diff.forEach((part) => {
                            // green for additions, red for deletions
                            // grey for common parts
                            const color = part.added ? 'green' :
                                part.removed ? 'red' : 'white';
                            span = document.createElement('span');
                            span.style.backgroundColor = color;
                            span.style.color = color == "white" ? "black" : "white";
                            span.innerHTML = part.value;
                            fragment.appendChild(span);
                        });
                        
                        const display2 = document.getElementById('display2');
                        const span2 = document.createElement('span');
    
                        span2.innerHTML = ipfsJson.content;
    
                        display.appendChild(fragment);
                        display2.appendChild(span2);
                    })();
                }else{
                    (async() => {
                        let ipfsResult = await fetch(`https://gateway.pinata.cloud/ipfs/${changedArticle.ipfsHash}`);
                        let ipfsJson = await ipfsResult.json();
                        let element = document.getElementById("ex1");
                        if(element){
                            element.remove();
                        }
    
                        $(`
                        <div id="ex1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal fade text-left">
                            <div role="document" class="modal-dialog modal-lg">
                                <div class="wsmodal-content border-0">
                                    <div class="modal-body p-0">
                                        <wsfieldset class="show" id="tab011">
                                            <p class="text-center wrstatus-invalid">THE CONTENT YOU ARE READING MAY BE HAVE CHANGED</p>
                                                <div class="form-group col-12 pb-0 px-4 pt-2">
                                                    <div class="col-12 border-0 font-weight-bolder text-center" style="font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-size:16px;">${changedArticle.title}</div>
                                                </div>
                                                <div class="wsrow center pt-2">
                                                    <div class="form-group col-6 pb-0 px-4 mb-4">
                                                        <div class="text-center mb-2" style="font-family: 'Open Sans', sans-serif;font-size:14px;">Original Version</div>
                                                        <div class="wsform-control display-content"><div id="display2"></div></div>
                                                    </div>
                                                    <div class="form-group col-6 pb-0 px-4">
                                                        <div class="text-center mb-2" style="font-family: 'Open Sans', sans-serif;font-size:14px;">Changed Version</div>
                                                        <div class="wsform-control display-content"><div id="display"></div></div>
                                                    </div>
                                                </div>
                                                <div class="px-4 ml-2 pb-4 pt-0">
                                                    <div class="text-left ml-2 mb-2" style="font-family: 'Open Sans', sans-serif;font-size:13px;">Fingerprint</div>
                                                    <input type="text" class="col-10 text-muted border-0" value="The content hash codes not verified in the blockchain." style="font-family: monospace;font-size:13px;" disabled>
                                                </div>
                                                <div class="wsrow center pt-0">
                                                    <div class="form-group col-6 pb-0 px-4 mb-2">
                                                        <div class="text-left ml-1 mb-2" style="font-family: 'Open Sans', sans-serif;font-size:13px;">Timestamp</div>
                                                        <input type="text" class="col-12 text-muted mb-2 border-0" value="${ changedArticle.postDate }" style="font-family: monospace;font-size:13px;" disabled>
                                                    </div>
                                                    <div class="form-group col-6 pb-0 px-4 mb-2">
                                                        <div class="text-left ml-1 mb-2" style="font-family: 'Open Sans', sans-serif;font-size:13px;">Modified</div>
                                                        <input type="text" class="col-12 text-muted mb-2 border-0" value="${ new Date(changedArticle.postModified).toDateString() } - ${ new Date(changedArticle.postModified).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }" style="font-family: monospace;font-size:13px;" disabled>
                                                    </div>
                                                </div>
                                        </wsfieldset>
                                        <wsfieldset id="tab021">
                                            <p class="px-4 pt-4" style="color:#323232; font-family: 'Open Sans', sans-serif;font-size:16px;">Data manipulation is often named as a serious threat to data integrity. Data can be tampered with, and malicious actors could use this to their advantage. Data users in various application domains want to be ensured that the data they are consuming are accurate and have not been tampered with.<br/><br/>Stamping a file on the blockchain proves that the document existed at that particular point of time. If the user has signed the document before stamping, then he may undeniably claim that the document was in his possession at the time of the stamping.<br/><br/><b>Wordstamp</b> allows to every owner of website to protect his content by a certified certificate with a digital timestamp stored and certified by <a href="https://ipfs.io" target="_blank">IPFS</a> and <a href="https://vexanium.com" target="_blank">Vexanium</a> Blockchain.</p>
                                        </wsfieldset>
                                    </div>
                                    <div class="bg-primary">
                                        <div class="wsfooter text-white border-0" style="font-family: 'Open Sans', sans-serif;font-weight: 400;font-size:14px;text-decoration: none;">Validated by <a class="text-white pl-1" href="https://trusti.id/?source_from=wordstamp" target="_blank">Trusti</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>`).appendTo('body').modal();
    
                        const original = ipfsJson.content,
                        changed = changedArticle.content,
                        color = '';
                        
                        let span = null;
    
                        const diff = Diff.diffChars(original, changed),
                            display = document.getElementById('display'),
                            fragment = document.createDocumentFragment();
        
                        diff.forEach((part) => {
                            // green for additions, red for deletions
                            // grey for common parts
                            const color = part.added ? '#9dda52' :
                                part.removed ? '#fc5185' : 'white';
                            span = document.createElement('span');
                            span.style.backgroundColor = color;
                            span.style.color = color == "white" ? "black" : "white";
                            span.innerHTML = part.value;
                            fragment.appendChild(span);
                        });
    
                        const display2 = document.getElementById('display2');
                        const span2 = document.createElement('span');
    
                        span2.innerHTML = ipfsJson.content;
    
                        display.appendChild(fragment);
                        display2.appendChild(span2);
                    })();
                }
				jQuery("#overlay").css("display", "none")
				jQuery(".centered").css("display", "none")
				jQuery(".text-wsloader").css("display", "none")
        });
		
    }