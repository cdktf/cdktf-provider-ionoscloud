# `dataIonoscloudS3BucketPublicAccessBlock` Submodule <a name="`dataIonoscloudS3BucketPublicAccessBlock` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudS3BucketPublicAccessBlock <a name="DataIonoscloudS3BucketPublicAccessBlock" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block ionoscloud_s3_bucket_public_access_block}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_s3_bucket_public_access_block

dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock(
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
  block_public_acls: typing.Union[bool, IResolvable] = None,
  block_public_policy: typing.Union[bool, IResolvable] = None,
  ignore_public_acls: typing.Union[bool, IResolvable] = None,
  restrict_public_buckets: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#bucket DataIonoscloudS3BucketPublicAccessBlock#bucket}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.blockPublicAcls">block_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_acls DataIonoscloudS3BucketPublicAccessBlock#block_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.blockPublicPolicy">block_public_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_policy DataIonoscloudS3BucketPublicAccessBlock#block_public_policy}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.ignorePublicAcls">ignore_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#ignore_public_acls DataIonoscloudS3BucketPublicAccessBlock#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#restrict_public_buckets DataIonoscloudS3BucketPublicAccessBlock#restrict_public_buckets}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#bucket DataIonoscloudS3BucketPublicAccessBlock#bucket}.

---

##### `block_public_acls`<sup>Optional</sup> <a name="block_public_acls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.blockPublicAcls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_acls DataIonoscloudS3BucketPublicAccessBlock#block_public_acls}.

---

##### `block_public_policy`<sup>Optional</sup> <a name="block_public_policy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.blockPublicPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_policy DataIonoscloudS3BucketPublicAccessBlock#block_public_policy}.

---

##### `ignore_public_acls`<sup>Optional</sup> <a name="ignore_public_acls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.ignorePublicAcls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#ignore_public_acls DataIonoscloudS3BucketPublicAccessBlock#ignore_public_acls}.

---

##### `restrict_public_buckets`<sup>Optional</sup> <a name="restrict_public_buckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.restrictPublicBuckets"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#restrict_public_buckets DataIonoscloudS3BucketPublicAccessBlock#restrict_public_buckets}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicAcls">reset_block_public_acls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicPolicy">reset_block_public_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetIgnorePublicAcls">reset_ignore_public_acls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetRestrictPublicBuckets">reset_restrict_public_buckets</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_block_public_acls` <a name="reset_block_public_acls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicAcls"></a>

```python
def reset_block_public_acls() -> None
```

##### `reset_block_public_policy` <a name="reset_block_public_policy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicPolicy"></a>

```python
def reset_block_public_policy() -> None
```

##### `reset_ignore_public_acls` <a name="reset_ignore_public_acls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetIgnorePublicAcls"></a>

```python
def reset_ignore_public_acls() -> None
```

##### `reset_restrict_public_buckets` <a name="reset_restrict_public_buckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetRestrictPublicBuckets"></a>

```python
def reset_restrict_public_buckets() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudS3BucketPublicAccessBlock resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_s3_bucket_public_access_block

dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_s3_bucket_public_access_block

dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_s3_bucket_public_access_block

dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_s3_bucket_public_access_block

dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudS3BucketPublicAccessBlock resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudS3BucketPublicAccessBlock to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudS3BucketPublicAccessBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudS3BucketPublicAccessBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAclsInput">block_public_acls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicyInput">block_public_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAclsInput">ignore_public_acls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBucketsInput">restrict_public_buckets_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAcls">block_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicy">block_public_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `block_public_acls_input`<sup>Optional</sup> <a name="block_public_acls_input" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAclsInput"></a>

```python
block_public_acls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_public_policy_input`<sup>Optional</sup> <a name="block_public_policy_input" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicyInput"></a>

```python
block_public_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `ignore_public_acls_input`<sup>Optional</sup> <a name="ignore_public_acls_input" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAclsInput"></a>

```python
ignore_public_acls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restrict_public_buckets_input`<sup>Optional</sup> <a name="restrict_public_buckets_input" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBucketsInput"></a>

```python
restrict_public_buckets_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_public_acls`<sup>Required</sup> <a name="block_public_acls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAcls"></a>

```python
block_public_acls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_public_policy`<sup>Required</sup> <a name="block_public_policy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicy"></a>

```python
block_public_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `ignore_public_acls`<sup>Required</sup> <a name="ignore_public_acls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAcls"></a>

```python
ignore_public_acls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restrict_public_buckets`<sup>Required</sup> <a name="restrict_public_buckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudS3BucketPublicAccessBlockConfig <a name="DataIonoscloudS3BucketPublicAccessBlockConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_s3_bucket_public_access_block

dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  block_public_acls: typing.Union[bool, IResolvable] = None,
  block_public_policy: typing.Union[bool, IResolvable] = None,
  ignore_public_acls: typing.Union[bool, IResolvable] = None,
  restrict_public_buckets: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#bucket DataIonoscloudS3BucketPublicAccessBlock#bucket}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicAcls">block_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_acls DataIonoscloudS3BucketPublicAccessBlock#block_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicPolicy">block_public_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_policy DataIonoscloudS3BucketPublicAccessBlock#block_public_policy}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#ignore_public_acls DataIonoscloudS3BucketPublicAccessBlock#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#restrict_public_buckets DataIonoscloudS3BucketPublicAccessBlock#restrict_public_buckets}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#bucket DataIonoscloudS3BucketPublicAccessBlock#bucket}.

---

##### `block_public_acls`<sup>Optional</sup> <a name="block_public_acls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicAcls"></a>

```python
block_public_acls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_acls DataIonoscloudS3BucketPublicAccessBlock#block_public_acls}.

---

##### `block_public_policy`<sup>Optional</sup> <a name="block_public_policy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicPolicy"></a>

```python
block_public_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_policy DataIonoscloudS3BucketPublicAccessBlock#block_public_policy}.

---

##### `ignore_public_acls`<sup>Optional</sup> <a name="ignore_public_acls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.ignorePublicAcls"></a>

```python
ignore_public_acls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#ignore_public_acls DataIonoscloudS3BucketPublicAccessBlock#ignore_public_acls}.

---

##### `restrict_public_buckets`<sup>Optional</sup> <a name="restrict_public_buckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#restrict_public_buckets DataIonoscloudS3BucketPublicAccessBlock#restrict_public_buckets}.

---



