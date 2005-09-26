
/*
Copyright Â© 2001-2004 World Wide Web Consortium, 
(Massachusetts Institute of Technology, European Research Consortium 
for Informatics and Mathematics, Keio University). All 
Rights Reserved. This work is distributed under the W3CÂ® Software License [1] in the 
hope that it will be useful, but WITHOUT ANY WARRANTY; without even 
the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 

[1] http://www.w3.org/Consortium/Legal/2002/copyright-software-20021231
*/



   /**
    *  Gets URI that identifies the test.
    *  @return uri identifier of test
    */
function getTargetURI() {
      return "http://www.w3.org/2001/DOM-Test-Suite/level3/core/nodecomparedocumentposition16";
   }

var docsLoaded = -1000000;
var builder = null;

//
//   This function is called by the testing framework before
//      running the test suite.
//
//   If there are no configuration exceptions, asynchronous
//        document loading is started.  Otherwise, the status
//        is set to complete and the exception is immediately
//        raised when entering the body of the test.
//
function setUpPage() {
   setUpPageStatus = 'running';
   try {
     //
     //   creates test document builder, may throw exception
     //
     builder = createConfiguredBuilder();

      docsLoaded = 0;
      
      var docRef = null;
      if (typeof(this.doc) != 'undefined') {
        docRef = this.doc;
      }
      docsLoaded += preload(docRef, "doc", "hc_staff");
        
       if (docsLoaded == 1) {
          setUpPage = 'complete';
       }
    } catch(ex) {
    	catchInitializationError(builder, ex);
        setUpPage = 'complete';
    }
}



//
//   This method is called on the completion of 
//      each asychronous load started in setUpTests.
//
//   When every synchronous loaded document has completed,
//      the page status is changed which allows the
//      body of the test to be executed.
function loadComplete() {
    if (++docsLoaded == 1) {
        setUpPageStatus = 'complete';
    }
}


/**
* 
	Using compareDocumentPosition check if the document position of a DocumentFragment node compared with
	a cloned Attr node is disconnected and implementation specific, and that the order between these two
	nodes is preserved.

* @author IBM
* @author Jenny Hsu
* @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
*/
function nodecomparedocumentposition16() {
   var success;
    if(checkInitialization(builder, "nodecomparedocumentposition16") != null) return;
    var doc;
      var docFrag;
      var attr;
      var attrCloned;
      var docFragPosition;
      var position1;
      var position2;
      var position3;
      
      var docRef = null;
      if (typeof(this.doc) != 'undefined') {
        docRef = this.doc;
      }
      doc = load(docRef, "doc", "hc_staff");
      docFrag = doc.createDocumentFragment();
      attr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
      attrCloned = attr.cloneNode(true);
      position1 = docFrag.compareDocumentPosition(attrCloned);
      assertEquals("isImplSpecificDisconnected1",33,position1);
       position2 = attrCloned.compareDocumentPosition(docFrag);
      assert("notBothPreceding",position1 != position2);
      assert("notBothFollowing",position1 != position2);
      assertEquals("isImplSpecificDisconnected2",33,position2);
       position3 = docFrag.compareDocumentPosition(attrCloned);
      assertEquals("isConsistent",position1,position3);
       
}




function runTest() {
   nodecomparedocumentposition16();
}
