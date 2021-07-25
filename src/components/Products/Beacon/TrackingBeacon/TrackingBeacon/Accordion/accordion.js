
import './accordion.scss';

function accordion(){
return(<>


<div class="container" id="accordiononeport">
<div id="div2">

<h1>Few more  <span>Details</span> about the Beacon </h1>
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
        Dimension - 34 x 36 x 10 mm  <br></br>
Material - Polycarbonate<br></br>
Size Tolerance - 1mm<br></br>
Environmental Sealing - IP-65 rating<br></br>
    
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
        Based on - NRF52805  <br></br>
CPU - 64 MHz Arm Cortex-M4<br></br>
Antenna - Internal PCB Antenna<br></br>
Memory - 192 KB Flash + 24 KB RAM<br></br>
Performance -144 Coremark/mA<br></br>
Efficiency -65 CoreMark/mA<br></br>
Wireless protocol support - Bluetooth Low Energy/2.4 GHz proprietary<br></br>
On-air data rate - Bluetooth LE : 2 Mbps/1 Mbps<br></br>
2.4 GHz proprietary : 2 Mbps/1 Mbps<br></br>
TX power - +4 dBm to -20 dBm<br></br>
RX sensitivity - -97 dBm at 1 Mbps<br></br>
Maximum range - 100m<br></br>
Battery - Coin cell (CR2032)<br></br>
Switch - Yes
        </div>
      </div>
    </div>



    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse5" data-target="#collapse5"
                            aria-expanded="true" aria-controls="faq1">
Visual & Sound Indicator
        </div>
      </div>
      <div id="collapse5" class="collapse" data-parent="#accordion">
        <div class="card-body">
        Sound -Buzzer<br></br>
Visual - Multi Colour Led

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
                        href="/Downloadfile/Tracking_Beacon.pdf"
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
