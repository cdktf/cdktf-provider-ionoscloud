# `s3ObjectCopy` Submodule <a name="`s3ObjectCopy` Submodule" id="@cdktf/provider-ionoscloud.s3ObjectCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectCopy <a name="S3ObjectCopy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy ionoscloud_s3_object_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_object_copy

s3ObjectCopy.S3ObjectCopy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  key: str,
  source: str,
  cache_control: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  copy_if_match: str = None,
  copy_if_modified_since: str = None,
  copy_if_none_match: str = None,
  copy_if_unmodified_since: str = None,
  expires: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  metadata: typing.Mapping[str] = None,
  metadata_directive: str = None,
  object_lock_legal_hold: str = None,
  object_lock_mode: str = None,
  object_lock_retain_until_date: str = None,
  server_side_encryption: str = None,
  server_side_encryption_customer_algorithm: str = None,
  server_side_encryption_customer_key: str = None,
  server_side_encryption_customer_key_md5: str = None,
  source_customer_algorithm: str = None,
  source_customer_key: str = None,
  source_customer_key_md5: str = None,
  storage_class: str = None,
  tagging_directive: str = None,
  tags: typing.Mapping[str] = None,
  website_redirect: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.key">key</a></code> | <code>str</code> | The key of the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.source">source</a></code> | <code>str</code> | The key of the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.cacheControl">cache_control</a></code> | <code>str</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentDisposition">content_disposition</a></code> | <code>str</code> | Specifies presentational information for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentEncoding">content_encoding</a></code> | <code>str</code> | Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentLanguage">content_language</a></code> | <code>str</code> | The natural language or languages of the intended audience for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfMatch">copy_if_match</a></code> | <code>str</code> | Copies the object if its entity tag (ETag) matches the specified tag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfModifiedSince">copy_if_modified_since</a></code> | <code>str</code> | Copies the object if it has been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfNoneMatch">copy_if_none_match</a></code> | <code>str</code> | Copies the object if its entity tag (ETag) is different than the specified ETag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfUnmodifiedSince">copy_if_unmodified_since</a></code> | <code>str</code> | Copies the object if it hasn't been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expires">expires</a></code> | <code>str</code> | The date and time at which the object copy is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | A map of metadata to store with the object copy in IONOS Object Storage Object Copy Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadataDirective">metadata_directive</a></code> | <code>str</code> | Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockLegalHold">object_lock_legal_hold</a></code> | <code>str</code> | Specifies whether a legal hold will be applied to this object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockMode">object_lock_mode</a></code> | <code>str</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | The date and time when you want this object copy's Object Copy Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | The server-side encryption algorithm used when storing this object copy in IONOS Object Storage Object Copy Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryptionCustomerAlgorithm">server_side_encryption_customer_algorithm</a></code> | <code>str</code> | Specifies the algorithm to use to when encrypting the object copy (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryptionCustomerKey">server_side_encryption_customer_key</a></code> | <code>str</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryptionCustomerKeyMd5">server_side_encryption_customer_key_md5</a></code> | <code>str</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerAlgorithm">source_customer_algorithm</a></code> | <code>str</code> | Specifies the algorithm to use to when decrypting the source object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKey">source_customer_key</a></code> | <code>str</code> | Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKeyMd5">source_customer_key_md5</a></code> | <code>str</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.storageClass">storage_class</a></code> | <code>str</code> | The storage class of the object copy. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.taggingDirective">tagging_directive</a></code> | <code>str</code> | Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tag-set for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.websiteRedirect">website_redirect</a></code> | <code>str</code> | If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.bucket"></a>

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#bucket S3ObjectCopy#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.key"></a>

- *Type:* str

The key of the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#key S3ObjectCopy#key}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.source"></a>

- *Type:* str

The key of the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#source S3ObjectCopy#source}

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.cacheControl"></a>

- *Type:* str

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#cache_control S3ObjectCopy#cache_control}

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentDisposition"></a>

- *Type:* str

Specifies presentational information for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentEncoding"></a>

- *Type:* str

Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentLanguage"></a>

- *Type:* str

The natural language or languages of the intended audience for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#content_language S3ObjectCopy#content_language}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentType"></a>

- *Type:* str

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#content_type S3ObjectCopy#content_type}

---

##### `copy_if_match`<sup>Optional</sup> <a name="copy_if_match" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfMatch"></a>

- *Type:* str

Copies the object if its entity tag (ETag) matches the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}

---

##### `copy_if_modified_since`<sup>Optional</sup> <a name="copy_if_modified_since" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfModifiedSince"></a>

- *Type:* str

Copies the object if it has been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}

---

##### `copy_if_none_match`<sup>Optional</sup> <a name="copy_if_none_match" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfNoneMatch"></a>

- *Type:* str

Copies the object if its entity tag (ETag) is different than the specified ETag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}

---

##### `copy_if_unmodified_since`<sup>Optional</sup> <a name="copy_if_unmodified_since" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfUnmodifiedSince"></a>

- *Type:* str

Copies the object if it hasn't been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expires"></a>

- *Type:* str

The date and time at which the object copy is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#expires S3ObjectCopy#expires}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place.

You must explicitly pass a value of true for this parameter to delete the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

A map of metadata to store with the object copy in IONOS Object Storage Object Copy Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#metadata S3ObjectCopy#metadata}

---

##### `metadata_directive`<sup>Optional</sup> <a name="metadata_directive" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadataDirective"></a>

- *Type:* str

Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}

---

##### `object_lock_legal_hold`<sup>Optional</sup> <a name="object_lock_legal_hold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockLegalHold"></a>

- *Type:* str

Specifies whether a legal hold will be applied to this object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#object_lock_legal_hold S3ObjectCopy#object_lock_legal_hold}

---

##### `object_lock_mode`<sup>Optional</sup> <a name="object_lock_mode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockMode"></a>

- *Type:* str

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}

---

##### `object_lock_retain_until_date`<sup>Optional</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockRetainUntilDate"></a>

- *Type:* str

The date and time when you want this object copy's Object Copy Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryption"></a>

- *Type:* str

The server-side encryption algorithm used when storing this object copy in IONOS Object Storage Object Copy Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}

---

##### `server_side_encryption_customer_algorithm`<sup>Optional</sup> <a name="server_side_encryption_customer_algorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryptionCustomerAlgorithm"></a>

- *Type:* str

Specifies the algorithm to use to when encrypting the object copy (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#server_side_encryption_customer_algorithm S3ObjectCopy#server_side_encryption_customer_algorithm}

---

##### `server_side_encryption_customer_key`<sup>Optional</sup> <a name="server_side_encryption_customer_key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryptionCustomerKey"></a>

- *Type:* str

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#server_side_encryption_customer_key S3ObjectCopy#server_side_encryption_customer_key}

---

##### `server_side_encryption_customer_key_md5`<sup>Optional</sup> <a name="server_side_encryption_customer_key_md5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryptionCustomerKeyMd5"></a>

- *Type:* str

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#server_side_encryption_customer_key_md5 S3ObjectCopy#server_side_encryption_customer_key_md5}

---

##### `source_customer_algorithm`<sup>Optional</sup> <a name="source_customer_algorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerAlgorithm"></a>

- *Type:* str

Specifies the algorithm to use to when decrypting the source object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}

---

##### `source_customer_key`<sup>Optional</sup> <a name="source_customer_key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKey"></a>

- *Type:* str

Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}

---

##### `source_customer_key_md5`<sup>Optional</sup> <a name="source_customer_key_md5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKeyMd5"></a>

- *Type:* str

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.storageClass"></a>

- *Type:* str

The storage class of the object copy. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#storage_class S3ObjectCopy#storage_class}

---

##### `tagging_directive`<sup>Optional</sup> <a name="tagging_directive" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.taggingDirective"></a>

- *Type:* str

Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

The tag-set for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#tags S3ObjectCopy#tags}

---

##### `website_redirect`<sup>Optional</sup> <a name="website_redirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.websiteRedirect"></a>

- *Type:* str

If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL.

IONOS Object Storage Object Copy Storage stores the value of this header in the object copy metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCacheControl">reset_cache_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentDisposition">reset_content_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentEncoding">reset_content_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentLanguage">reset_content_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch">reset_copy_if_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince">reset_copy_if_modified_since</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch">reset_copy_if_none_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince">reset_copy_if_unmodified_since</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetExpires">reset_expires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective">reset_metadata_directive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHold">reset_object_lock_legal_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode">reset_object_lock_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate">reset_object_lock_retain_until_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption">reset_server_side_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerAlgorithm">reset_server_side_encryption_customer_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKey">reset_server_side_encryption_customer_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKeyMd5">reset_server_side_encryption_customer_key_md5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm">reset_source_customer_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey">reset_source_customer_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5">reset_source_customer_key_md5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetStorageClass">reset_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective">reset_tagging_directive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect">reset_website_redirect</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cache_control` <a name="reset_cache_control" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCacheControl"></a>

```python
def reset_cache_control() -> None
```

##### `reset_content_disposition` <a name="reset_content_disposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentDisposition"></a>

```python
def reset_content_disposition() -> None
```

##### `reset_content_encoding` <a name="reset_content_encoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentEncoding"></a>

```python
def reset_content_encoding() -> None
```

##### `reset_content_language` <a name="reset_content_language" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentLanguage"></a>

```python
def reset_content_language() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_copy_if_match` <a name="reset_copy_if_match" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch"></a>

```python
def reset_copy_if_match() -> None
```

##### `reset_copy_if_modified_since` <a name="reset_copy_if_modified_since" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince"></a>

```python
def reset_copy_if_modified_since() -> None
```

##### `reset_copy_if_none_match` <a name="reset_copy_if_none_match" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch"></a>

```python
def reset_copy_if_none_match() -> None
```

##### `reset_copy_if_unmodified_since` <a name="reset_copy_if_unmodified_since" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince"></a>

```python
def reset_copy_if_unmodified_since() -> None
```

##### `reset_expires` <a name="reset_expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetExpires"></a>

```python
def reset_expires() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_metadata_directive` <a name="reset_metadata_directive" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective"></a>

```python
def reset_metadata_directive() -> None
```

##### `reset_object_lock_legal_hold` <a name="reset_object_lock_legal_hold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHold"></a>

```python
def reset_object_lock_legal_hold() -> None
```

##### `reset_object_lock_mode` <a name="reset_object_lock_mode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode"></a>

```python
def reset_object_lock_mode() -> None
```

##### `reset_object_lock_retain_until_date` <a name="reset_object_lock_retain_until_date" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate"></a>

```python
def reset_object_lock_retain_until_date() -> None
```

##### `reset_server_side_encryption` <a name="reset_server_side_encryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption"></a>

```python
def reset_server_side_encryption() -> None
```

##### `reset_server_side_encryption_customer_algorithm` <a name="reset_server_side_encryption_customer_algorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerAlgorithm"></a>

```python
def reset_server_side_encryption_customer_algorithm() -> None
```

##### `reset_server_side_encryption_customer_key` <a name="reset_server_side_encryption_customer_key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKey"></a>

```python
def reset_server_side_encryption_customer_key() -> None
```

##### `reset_server_side_encryption_customer_key_md5` <a name="reset_server_side_encryption_customer_key_md5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKeyMd5"></a>

```python
def reset_server_side_encryption_customer_key_md5() -> None
```

##### `reset_source_customer_algorithm` <a name="reset_source_customer_algorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm"></a>

```python
def reset_source_customer_algorithm() -> None
```

##### `reset_source_customer_key` <a name="reset_source_customer_key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey"></a>

```python
def reset_source_customer_key() -> None
```

##### `reset_source_customer_key_md5` <a name="reset_source_customer_key_md5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5"></a>

```python
def reset_source_customer_key_md5() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```

##### `reset_tagging_directive` <a name="reset_tagging_directive" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective"></a>

```python
def reset_tagging_directive() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_website_redirect` <a name="reset_website_redirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect"></a>

```python
def reset_website_redirect() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_object_copy

s3ObjectCopy.S3ObjectCopy.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_object_copy

s3ObjectCopy.S3ObjectCopy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_object_copy

s3ObjectCopy.S3ObjectCopy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_object_copy

s3ObjectCopy.S3ObjectCopy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3ObjectCopy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3ObjectCopy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3ObjectCopy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput">cache_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput">content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput">content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput">content_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput">copy_if_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput">copy_if_modified_since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput">copy_if_none_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput">copy_if_unmodified_since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expiresInput">expires_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput">metadata_directive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldInput">object_lock_legal_hold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput">object_lock_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput">object_lock_retain_until_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithmInput">server_side_encryption_customer_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyInput">server_side_encryption_customer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5Input">server_side_encryption_customer_key_md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput">server_side_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput">source_customer_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput">source_customer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input">source_customer_key_md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput">tagging_directive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput">website_redirect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguage">content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch">copy_if_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince">copy_if_modified_since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch">copy_if_none_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince">copy_if_unmodified_since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expires">expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirective">metadata_directive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHold">object_lock_legal_hold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockMode">object_lock_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithm">server_side_encryption_customer_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKey">server_side_encryption_customer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5">server_side_encryption_customer_key_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm">source_customer_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey">source_customer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5">source_customer_key_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirective">tagging_directive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect">website_redirect</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `cache_control_input`<sup>Optional</sup> <a name="cache_control_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput"></a>

```python
cache_control_input: str
```

- *Type:* str

---

##### `content_disposition_input`<sup>Optional</sup> <a name="content_disposition_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput"></a>

```python
content_disposition_input: str
```

- *Type:* str

---

##### `content_encoding_input`<sup>Optional</sup> <a name="content_encoding_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput"></a>

```python
content_encoding_input: str
```

- *Type:* str

---

##### `content_language_input`<sup>Optional</sup> <a name="content_language_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput"></a>

```python
content_language_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `copy_if_match_input`<sup>Optional</sup> <a name="copy_if_match_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput"></a>

```python
copy_if_match_input: str
```

- *Type:* str

---

##### `copy_if_modified_since_input`<sup>Optional</sup> <a name="copy_if_modified_since_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput"></a>

```python
copy_if_modified_since_input: str
```

- *Type:* str

---

##### `copy_if_none_match_input`<sup>Optional</sup> <a name="copy_if_none_match_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput"></a>

```python
copy_if_none_match_input: str
```

- *Type:* str

---

##### `copy_if_unmodified_since_input`<sup>Optional</sup> <a name="copy_if_unmodified_since_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput"></a>

```python
copy_if_unmodified_since_input: str
```

- *Type:* str

---

##### `expires_input`<sup>Optional</sup> <a name="expires_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expiresInput"></a>

```python
expires_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `metadata_directive_input`<sup>Optional</sup> <a name="metadata_directive_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput"></a>

```python
metadata_directive_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `object_lock_legal_hold_input`<sup>Optional</sup> <a name="object_lock_legal_hold_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldInput"></a>

```python
object_lock_legal_hold_input: str
```

- *Type:* str

---

##### `object_lock_mode_input`<sup>Optional</sup> <a name="object_lock_mode_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput"></a>

```python
object_lock_mode_input: str
```

- *Type:* str

---

##### `object_lock_retain_until_date_input`<sup>Optional</sup> <a name="object_lock_retain_until_date_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput"></a>

```python
object_lock_retain_until_date_input: str
```

- *Type:* str

---

##### `server_side_encryption_customer_algorithm_input`<sup>Optional</sup> <a name="server_side_encryption_customer_algorithm_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithmInput"></a>

```python
server_side_encryption_customer_algorithm_input: str
```

- *Type:* str

---

##### `server_side_encryption_customer_key_input`<sup>Optional</sup> <a name="server_side_encryption_customer_key_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyInput"></a>

```python
server_side_encryption_customer_key_input: str
```

- *Type:* str

---

##### `server_side_encryption_customer_key_md5_input`<sup>Optional</sup> <a name="server_side_encryption_customer_key_md5_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5Input"></a>

```python
server_side_encryption_customer_key_md5_input: str
```

- *Type:* str

---

##### `server_side_encryption_input`<sup>Optional</sup> <a name="server_side_encryption_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput"></a>

```python
server_side_encryption_input: str
```

- *Type:* str

---

##### `source_customer_algorithm_input`<sup>Optional</sup> <a name="source_customer_algorithm_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput"></a>

```python
source_customer_algorithm_input: str
```

- *Type:* str

---

##### `source_customer_key_input`<sup>Optional</sup> <a name="source_customer_key_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput"></a>

```python
source_customer_key_input: str
```

- *Type:* str

---

##### `source_customer_key_md5_input`<sup>Optional</sup> <a name="source_customer_key_md5_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input"></a>

```python
source_customer_key_md5_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `tagging_directive_input`<sup>Optional</sup> <a name="tagging_directive_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput"></a>

```python
tagging_directive_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `website_redirect_input`<sup>Optional</sup> <a name="website_redirect_input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput"></a>

```python
website_redirect_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_language`<sup>Required</sup> <a name="content_language" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `copy_if_match`<sup>Required</sup> <a name="copy_if_match" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch"></a>

```python
copy_if_match: str
```

- *Type:* str

---

##### `copy_if_modified_since`<sup>Required</sup> <a name="copy_if_modified_since" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince"></a>

```python
copy_if_modified_since: str
```

- *Type:* str

---

##### `copy_if_none_match`<sup>Required</sup> <a name="copy_if_none_match" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch"></a>

```python
copy_if_none_match: str
```

- *Type:* str

---

##### `copy_if_unmodified_since`<sup>Required</sup> <a name="copy_if_unmodified_since" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince"></a>

```python
copy_if_unmodified_since: str
```

- *Type:* str

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expires"></a>

```python
expires: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata_directive`<sup>Required</sup> <a name="metadata_directive" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirective"></a>

```python
metadata_directive: str
```

- *Type:* str

---

##### `object_lock_legal_hold`<sup>Required</sup> <a name="object_lock_legal_hold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHold"></a>

```python
object_lock_legal_hold: str
```

- *Type:* str

---

##### `object_lock_mode`<sup>Required</sup> <a name="object_lock_mode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockMode"></a>

```python
object_lock_mode: str
```

- *Type:* str

---

##### `object_lock_retain_until_date`<sup>Required</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate"></a>

```python
object_lock_retain_until_date: str
```

- *Type:* str

---

##### `server_side_encryption`<sup>Required</sup> <a name="server_side_encryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption"></a>

```python
server_side_encryption: str
```

- *Type:* str

---

##### `server_side_encryption_customer_algorithm`<sup>Required</sup> <a name="server_side_encryption_customer_algorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithm"></a>

```python
server_side_encryption_customer_algorithm: str
```

- *Type:* str

---

##### `server_side_encryption_customer_key`<sup>Required</sup> <a name="server_side_encryption_customer_key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKey"></a>

```python
server_side_encryption_customer_key: str
```

- *Type:* str

---

##### `server_side_encryption_customer_key_md5`<sup>Required</sup> <a name="server_side_encryption_customer_key_md5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5"></a>

```python
server_side_encryption_customer_key_md5: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_customer_algorithm`<sup>Required</sup> <a name="source_customer_algorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm"></a>

```python
source_customer_algorithm: str
```

- *Type:* str

---

##### `source_customer_key`<sup>Required</sup> <a name="source_customer_key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey"></a>

```python
source_customer_key: str
```

- *Type:* str

---

##### `source_customer_key_md5`<sup>Required</sup> <a name="source_customer_key_md5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5"></a>

```python
source_customer_key_md5: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `tagging_directive`<sup>Required</sup> <a name="tagging_directive" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirective"></a>

```python
tagging_directive: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `website_redirect`<sup>Required</sup> <a name="website_redirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect"></a>

```python
website_redirect: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectCopyConfig <a name="S3ObjectCopyConfig" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_object_copy

s3ObjectCopy.S3ObjectCopyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  key: str,
  source: str,
  cache_control: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  copy_if_match: str = None,
  copy_if_modified_since: str = None,
  copy_if_none_match: str = None,
  copy_if_unmodified_since: str = None,
  expires: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  metadata: typing.Mapping[str] = None,
  metadata_directive: str = None,
  object_lock_legal_hold: str = None,
  object_lock_mode: str = None,
  object_lock_retain_until_date: str = None,
  server_side_encryption: str = None,
  server_side_encryption_customer_algorithm: str = None,
  server_side_encryption_customer_key: str = None,
  server_side_encryption_customer_key_md5: str = None,
  source_customer_algorithm: str = None,
  source_customer_key: str = None,
  source_customer_key_md5: str = None,
  storage_class: str = None,
  tagging_directive: str = None,
  tags: typing.Mapping[str] = None,
  website_redirect: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.bucket">bucket</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.key">key</a></code> | <code>str</code> | The key of the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.source">source</a></code> | <code>str</code> | The key of the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl">cache_control</a></code> | <code>str</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition">content_disposition</a></code> | <code>str</code> | Specifies presentational information for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding">content_encoding</a></code> | <code>str</code> | Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage">content_language</a></code> | <code>str</code> | The natural language or languages of the intended audience for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentType">content_type</a></code> | <code>str</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch">copy_if_match</a></code> | <code>str</code> | Copies the object if its entity tag (ETag) matches the specified tag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince">copy_if_modified_since</a></code> | <code>str</code> | Copies the object if it has been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch">copy_if_none_match</a></code> | <code>str</code> | Copies the object if its entity tag (ETag) is different than the specified ETag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince">copy_if_unmodified_since</a></code> | <code>str</code> | Copies the object if it hasn't been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.expires">expires</a></code> | <code>str</code> | The date and time at which the object copy is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | A map of metadata to store with the object copy in IONOS Object Storage Object Copy Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective">metadata_directive</a></code> | <code>str</code> | Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHold">object_lock_legal_hold</a></code> | <code>str</code> | Specifies whether a legal hold will be applied to this object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode">object_lock_mode</a></code> | <code>str</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | The date and time when you want this object copy's Object Copy Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | The server-side encryption algorithm used when storing this object copy in IONOS Object Storage Object Copy Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerAlgorithm">server_side_encryption_customer_algorithm</a></code> | <code>str</code> | Specifies the algorithm to use to when encrypting the object copy (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKey">server_side_encryption_customer_key</a></code> | <code>str</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKeyMd5">server_side_encryption_customer_key_md5</a></code> | <code>str</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm">source_customer_algorithm</a></code> | <code>str</code> | Specifies the algorithm to use to when decrypting the source object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey">source_customer_key</a></code> | <code>str</code> | Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5">source_customer_key_md5</a></code> | <code>str</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass">storage_class</a></code> | <code>str</code> | The storage class of the object copy. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective">tagging_directive</a></code> | <code>str</code> | Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tag-set for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect">website_redirect</a></code> | <code>str</code> | If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#bucket S3ObjectCopy#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#key S3ObjectCopy#key}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.source"></a>

```python
source: str
```

- *Type:* str

The key of the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#source S3ObjectCopy#source}

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#cache_control S3ObjectCopy#cache_control}

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

Specifies presentational information for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

The natural language or languages of the intended audience for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#content_language S3ObjectCopy#content_language}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#content_type S3ObjectCopy#content_type}

---

##### `copy_if_match`<sup>Optional</sup> <a name="copy_if_match" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch"></a>

```python
copy_if_match: str
```

- *Type:* str

Copies the object if its entity tag (ETag) matches the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}

---

##### `copy_if_modified_since`<sup>Optional</sup> <a name="copy_if_modified_since" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince"></a>

```python
copy_if_modified_since: str
```

- *Type:* str

Copies the object if it has been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}

---

##### `copy_if_none_match`<sup>Optional</sup> <a name="copy_if_none_match" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch"></a>

```python
copy_if_none_match: str
```

- *Type:* str

Copies the object if its entity tag (ETag) is different than the specified ETag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}

---

##### `copy_if_unmodified_since`<sup>Optional</sup> <a name="copy_if_unmodified_since" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince"></a>

```python
copy_if_unmodified_since: str
```

- *Type:* str

Copies the object if it hasn't been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.expires"></a>

```python
expires: str
```

- *Type:* str

The date and time at which the object copy is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#expires S3ObjectCopy#expires}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place.

You must explicitly pass a value of true for this parameter to delete the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of metadata to store with the object copy in IONOS Object Storage Object Copy Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#metadata S3ObjectCopy#metadata}

---

##### `metadata_directive`<sup>Optional</sup> <a name="metadata_directive" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective"></a>

```python
metadata_directive: str
```

- *Type:* str

Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}

---

##### `object_lock_legal_hold`<sup>Optional</sup> <a name="object_lock_legal_hold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHold"></a>

```python
object_lock_legal_hold: str
```

- *Type:* str

Specifies whether a legal hold will be applied to this object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#object_lock_legal_hold S3ObjectCopy#object_lock_legal_hold}

---

##### `object_lock_mode`<sup>Optional</sup> <a name="object_lock_mode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode"></a>

```python
object_lock_mode: str
```

- *Type:* str

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}

---

##### `object_lock_retain_until_date`<sup>Optional</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate"></a>

```python
object_lock_retain_until_date: str
```

- *Type:* str

The date and time when you want this object copy's Object Copy Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption"></a>

```python
server_side_encryption: str
```

- *Type:* str

The server-side encryption algorithm used when storing this object copy in IONOS Object Storage Object Copy Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}

---

##### `server_side_encryption_customer_algorithm`<sup>Optional</sup> <a name="server_side_encryption_customer_algorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerAlgorithm"></a>

```python
server_side_encryption_customer_algorithm: str
```

- *Type:* str

Specifies the algorithm to use to when encrypting the object copy (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#server_side_encryption_customer_algorithm S3ObjectCopy#server_side_encryption_customer_algorithm}

---

##### `server_side_encryption_customer_key`<sup>Optional</sup> <a name="server_side_encryption_customer_key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKey"></a>

```python
server_side_encryption_customer_key: str
```

- *Type:* str

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#server_side_encryption_customer_key S3ObjectCopy#server_side_encryption_customer_key}

---

##### `server_side_encryption_customer_key_md5`<sup>Optional</sup> <a name="server_side_encryption_customer_key_md5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKeyMd5"></a>

```python
server_side_encryption_customer_key_md5: str
```

- *Type:* str

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#server_side_encryption_customer_key_md5 S3ObjectCopy#server_side_encryption_customer_key_md5}

---

##### `source_customer_algorithm`<sup>Optional</sup> <a name="source_customer_algorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm"></a>

```python
source_customer_algorithm: str
```

- *Type:* str

Specifies the algorithm to use to when decrypting the source object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}

---

##### `source_customer_key`<sup>Optional</sup> <a name="source_customer_key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey"></a>

```python
source_customer_key: str
```

- *Type:* str

Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}

---

##### `source_customer_key_md5`<sup>Optional</sup> <a name="source_customer_key_md5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5"></a>

```python
source_customer_key_md5: str
```

- *Type:* str

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The storage class of the object copy. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#storage_class S3ObjectCopy#storage_class}

---

##### `tagging_directive`<sup>Optional</sup> <a name="tagging_directive" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective"></a>

```python
tagging_directive: str
```

- *Type:* str

Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tag-set for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#tags S3ObjectCopy#tags}

---

##### `website_redirect`<sup>Optional</sup> <a name="website_redirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect"></a>

```python
website_redirect: str
```

- *Type:* str

If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL.

IONOS Object Storage Object Copy Storage stores the value of this header in the object copy metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}

---



