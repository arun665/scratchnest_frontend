
import './accordion.scss';

function accordion(){
return(<>


<div class="container" id="accordiononeport">
<div id="div2">

<h1>Few more  <span>Details</span> about the Antenna</h1>
<p> Parameters and Technical specifications of our product are listed below.</p>
  


  
    </div>
  <div id="accordion">
    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapseOne" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="faq1">
        Physical Characteristics
        </div>
      </div>
      <div id="collapseOne" class="collapse" data-parent="#accordion">
        <div class="card-body">
    
        Dimension - 300 X 300 X 50 mm<br></br>
Material - Polycarbonate<br></br>
Connector - TNC female<br></br>
Environmental Sealing - IP-65 rating
    
        </div>
      </div>
    </div>
 
    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapseTwo" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="faq2">
     User Environment
        </div>
      </div>
      <div id="collapseTwo" class="collapse" data-parent="#accordion">
        <div class="card-body">
        Environmental Sealing - IP65 rating<br></br>
Operating Temperature - -25 to 65 °C<br></br>
Storage Temperature - -45 to 90 °C<br></br>
Relative Humidity - 10% to 90%<br></br>
        </div>
      </div>
    </div>
    

    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse4" data-target="#collapse4"
                            aria-expanded="true" aria-controls="faq1">
 RF Features
        </div>
      </div>
      <div id="collapse4" class="collapse" data-parent="#accordion">
        <div class="card-body">
        Frequency - 865-868 MHz and 902-928 MHz (850-940 MHz)<br></br>
Bandwidth - 90 MHz<br></br>
Antenna - Inbuilt 9 dBi Circular Polarized Antenna<br></br>
Maximum VSWR - 1.5:1<br></br>
Gain - 9 dBi<br></br>
3 dB Beamwidth - Azimuth - 68°<br></br>
Front to Back Ratio - 17 dB<br></br>
Polarization - RHCP/LHCP<br></br>
Input Impedance - 50 Ohm<br></br>

        </div>
      </div>
    </div>


{/*}
    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse5" data-target="#collapse5"
                            aria-expanded="true" aria-controls="faq1">
Ordering Details
        </div>
      </div>
      <div id="collapse5" class="collapse" data-parent="#accordion">
        <div class="card-body">
        RHCP -SN-CA 101 R<br></br>
LHCP - SN-CA 101 L

        </div>
      </div>
    </div>
*/}

    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse5" data-target="#collapse6"
                            aria-expanded="true" aria-controls="faq1">
Accessories Included
        </div>
      </div>
      <div id="collapse6" class="collapse" data-parent="#accordion">
        <div class="card-body">
        Antenna<br></br>
Mounting brackets<br></br>
User manual
        </div>
      </div>
    </div>



    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse3" data-target="#collapse3"
                            aria-expanded="true" aria-controls="faq1">
 Downloads
        </div>
      </div>
      <div id="collapse3" class="collapse" data-parent="#accordion">
        <div class="card-body">
        <a
                        href="/Downloadfile/ir1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Click to download 
                      </a>
    
        </div>
      </div>
    </div>
  </div>
</div>
</>)
}


export default accordion;
