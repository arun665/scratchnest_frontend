
import './accordion.scss';

function accordion(){
return(<>


<div class="container" id="accordion">
  <div id="accordion">
    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapseOne" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="faq1">
         Parameters Re-programmable using our software
        </div>
      </div>
      <div id="collapseOne" class="collapse" data-parent="#accordion">
        <div class="card-body">
    
        Log Interval - 10 min to 19 hour <br></br>
Start Delay - 0 min to 5 Hour <br></br>
Time Zone - UTC - 14.00 to UTC + 14.00 <br></br>
Low Alarm - Upto -40 °C<br></br>
High Alarm - Upto 85 °C<br></br>
    
        </div>
      </div>
    </div>
 
    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapseTwo" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="faq2">
         Technical Specifications
        </div>
      </div>
      <div id="collapseTwo" class="collapse" data-parent="#accordion">
        <div class="card-body">
        Type - Single use <br></br>
Measurement Range -–40 °C to +85 °C<br></br>
Accuracy - ±0.5 °C<br></br>
Resolution - 0.25 °C<br></br>
Memory Capacity - 13000<br></br>
Batteryy - 3V Lithium<br></br>
Recording Interval - 10 minutes(Customisable)<br></br>
Recording Duration - 90 days<br></br>
Initial Delay - 30 Mins<br></br>
Protection Class - IP67<br></br>
Report Secured - PDF<br></br>
Report Type - Graphical and Tabular manner in PDF<br></br>
Connectivity - USB 2.0<br></br>
Alarm Type - High & Low Alarm<br></br>
High Alarm - 8 °C(Customisable)<br></br>
Low Alarm - 2 °C(Customisable)<br></br>
Re-programmable - Yes<br></br>
Shelf Life - 12 months
    
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
                        href="/Downloadfile/ambitag.pdf"
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
