(function() {var type_impls = {
"sui_types":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1326-1399\">source</a><a href=\"#impl-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const STRONG_THRESHOLD: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt; <a class=\"struct\" href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html\" title=\"struct sui_types::crypto::AuthorityQuorumSignInfo\">AuthorityQuorumSignInfo</a>&lt;STRONG_THRESHOLD&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new_from_auth_sign_infos\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1327-1375\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html#tymethod.new_from_auth_sign_infos\" class=\"fn\">new_from_auth_sign_infos</a>(\n    auth_sign_infos: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"sui_types/crypto/struct.AuthoritySignInfo.html\" title=\"struct sui_types::crypto::AuthoritySignInfo\">AuthoritySignInfo</a>&gt;,\n    committee: &amp;<a class=\"struct\" href=\"sui_types/committee/struct.Committee.html\" title=\"struct sui_types::committee::Committee\">Committee</a>\n) -&gt; <a class=\"type\" href=\"sui_types/error/type.SuiResult.html\" title=\"type sui_types::error::SuiResult\">SuiResult</a>&lt;Self&gt;</h4></section><section id=\"method.authorities\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1377-1386\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html#tymethod.authorities\" class=\"fn\">authorities</a>&lt;'a&gt;(\n    &amp;'a self,\n    committee: &amp;'a <a class=\"struct\" href=\"sui_types/committee/struct.Committee.html\" title=\"struct sui_types::committee::Committee\">Committee</a>\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"type\" href=\"sui_types/error/type.SuiResult.html\" title=\"type sui_types::error::SuiResult\">SuiResult</a>&lt;&amp;<a class=\"type\" href=\"sui_types/base_types/type.AuthorityName.html\" title=\"type sui_types::base_types::AuthorityName\">AuthorityName</a>&gt;&gt;</h4></section><section id=\"method.quorum_threshold\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1388-1390\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html#tymethod.quorum_threshold\" class=\"fn\">quorum_threshold</a>(committee: &amp;<a class=\"struct\" href=\"sui_types/committee/struct.Committee.html\" title=\"struct sui_types::committee::Committee\">Committee</a>) -&gt; <a class=\"type\" href=\"sui_types/committee/type.StakeUnit.html\" title=\"type sui_types::committee::StakeUnit\">StakeUnit</a></h4></section><section id=\"method.len\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1392-1394\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a></h4></section><section id=\"method.is_empty\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1396-1398\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></div></details>",0,"sui_types::crypto::AuthorityStrongQuorumSignInfo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1187\">source</a><a href=\"#impl-Debug-for-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const STRONG_THRESHOLD: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html\" title=\"struct sui_types::crypto::AuthorityQuorumSignInfo\">AuthorityQuorumSignInfo</a>&lt;STRONG_THRESHOLD&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1187\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sui_types::crypto::AuthorityStrongQuorumSignInfo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CValidatorAggregatedSignature%3E-for-AuthorityQuorumSignInfo%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/sui_sdk2_conversions.rs.html#72-89\">source</a><a href=\"#impl-From%3CValidatorAggregatedSignature%3E-for-AuthorityQuorumSignInfo%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const T: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"sui_sdk/types/crypto/validator/struct.ValidatorAggregatedSignature.html\" title=\"struct sui_sdk::types::crypto::validator::ValidatorAggregatedSignature\">ValidatorAggregatedSignature</a>&gt; for <a class=\"struct\" href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html\" title=\"struct sui_types::crypto::AuthorityQuorumSignInfo\">AuthorityQuorumSignInfo</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/sui_sdk2_conversions.rs.html#75-88\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: <a class=\"struct\" href=\"sui_sdk/types/crypto/validator/struct.ValidatorAggregatedSignature.html\" title=\"struct sui_sdk::types::crypto::validator::ValidatorAggregatedSignature\">ValidatorAggregatedSignature</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<ValidatorAggregatedSignature>","sui_types::crypto::AuthorityStrongQuorumSignInfo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-AuthorityQuorumSignInfo%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1401-1416\">source</a><a href=\"#impl-Display-for-AuthorityQuorumSignInfo%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const S: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html\" title=\"struct sui_types::crypto::AuthorityQuorumSignInfo\">AuthorityQuorumSignInfo</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1402-1415\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","sui_types::crypto::AuthorityStrongQuorumSignInfo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1187\">source</a><a href=\"#impl-Serialize-for-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const STRONG_THRESHOLD: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html\" title=\"struct sui_types::crypto::AuthorityQuorumSignInfo\">AuthorityQuorumSignInfo</a>&lt;STRONG_THRESHOLD&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1187\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","sui_types::crypto::AuthorityStrongQuorumSignInfo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-JsonSchema-for-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1187\">source</a><a href=\"#impl-JsonSchema-for-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const STRONG_THRESHOLD: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt; JsonSchema for <a class=\"struct\" href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html\" title=\"struct sui_types::crypto::AuthorityQuorumSignInfo\">AuthorityQuorumSignInfo</a>&lt;STRONG_THRESHOLD&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.schema_name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1187\">source</a><a href=\"#method.schema_name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">schema_name</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a></h4></section></summary><div class='docblock'>The name of the generated JSON Schema. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.schema_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1187\">source</a><a href=\"#method.schema_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">schema_id</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Returns a string that uniquely identifies the schema produced by this type. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.json_schema\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1187\">source</a><a href=\"#method.json_schema\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">json_schema</a>(gen: &amp;mut SchemaGenerator) -&gt; Schema</h4></section></summary><div class='docblock'>Generates a JSON Schema for this type. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_referenceable\" class=\"method trait-impl\"><a href=\"#method.is_referenceable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">is_referenceable</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Whether JSON Schemas generated for this type should be re-used where possible using the <code>$ref</code> keyword. <a>Read more</a></div></details></div></details>","JsonSchema","sui_types::crypto::AuthorityStrongQuorumSignInfo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1187\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, const STRONG_THRESHOLD: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html\" title=\"struct sui_types::crypto::AuthorityQuorumSignInfo\">AuthorityQuorumSignInfo</a>&lt;STRONG_THRESHOLD&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1187\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.202/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.202/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.202/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","sui_types::crypto::AuthorityStrongQuorumSignInfo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1187\">source</a><a href=\"#impl-Clone-for-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const STRONG_THRESHOLD: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html\" title=\"struct sui_types::crypto::AuthorityQuorumSignInfo\">AuthorityQuorumSignInfo</a>&lt;STRONG_THRESHOLD&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1187\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html\" title=\"struct sui_types::crypto::AuthorityQuorumSignInfo\">AuthorityQuorumSignInfo</a>&lt;STRONG_THRESHOLD&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sui_types::crypto::AuthorityStrongQuorumSignInfo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AuthoritySignInfoTrait-for-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1245-1324\">source</a><a href=\"#impl-AuthoritySignInfoTrait-for-AuthorityQuorumSignInfo%3CSTRONG_THRESHOLD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const STRONG_THRESHOLD: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"sui_types/crypto/trait.AuthoritySignInfoTrait.html\" title=\"trait sui_types::crypto::AuthoritySignInfoTrait\">AuthoritySignInfoTrait</a> for <a class=\"struct\" href=\"sui_types/crypto/struct.AuthorityQuorumSignInfo.html\" title=\"struct sui_types::crypto::AuthorityQuorumSignInfo\">AuthorityQuorumSignInfo</a>&lt;STRONG_THRESHOLD&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.verify_secure\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1248-1259\">source</a><a href=\"#method.verify_secure\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_types/crypto/trait.AuthoritySignInfoTrait.html#tymethod.verify_secure\" class=\"fn\">verify_secure</a>&lt;T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>&gt;(\n    &amp;self,\n    data: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;T</a>,\n    intent: <a class=\"struct\" href=\"shared_crypto/intent/struct.Intent.html\" title=\"struct shared_crypto::intent::Intent\">Intent</a>,\n    committee: &amp;<a class=\"struct\" href=\"sui_types/committee/struct.Committee.html\" title=\"struct sui_types::committee::Committee\">Committee</a>\n) -&gt; <a class=\"type\" href=\"sui_types/error/type.SuiResult.html\" title=\"type sui_types::error::SuiResult\">SuiResult</a></h4></section><section id=\"method.add_to_verification_obligation\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/crypto.rs.html#1261-1323\">source</a><a href=\"#method.add_to_verification_obligation\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_types/crypto/trait.AuthoritySignInfoTrait.html#tymethod.add_to_verification_obligation\" class=\"fn\">add_to_verification_obligation</a>&lt;'a&gt;(\n    &amp;self,\n    committee: &amp;'a <a class=\"struct\" href=\"sui_types/committee/struct.Committee.html\" title=\"struct sui_types::committee::Committee\">Committee</a>,\n    obligation: &amp;mut <a class=\"struct\" href=\"sui_types/crypto/struct.VerificationObligation.html\" title=\"struct sui_types::crypto::VerificationObligation\">VerificationObligation</a>&lt;'a&gt;,\n    message_index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>\n) -&gt; <a class=\"type\" href=\"sui_types/error/type.SuiResult.html\" title=\"type sui_types::error::SuiResult\">SuiResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></div></details>","AuthoritySignInfoTrait","sui_types::crypto::AuthorityStrongQuorumSignInfo"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()