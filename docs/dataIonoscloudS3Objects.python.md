# `dataIonoscloudS3Objects` Submodule <a name="`dataIonoscloudS3Objects` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudS3Objects <a name="DataIonoscloudS3Objects" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects ionoscloud_s3_objects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_s3_objects

dataIonoscloudS3Objects.DataIonoscloudS3Objects(
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
  delimiter: str = None,
  encoding_type: str = None,
  fetch_owner: typing.Union[bool, IResolvable] = None,
  max_keys: typing.Union[int, float] = None,
  prefix: str = None,
  start_after: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#bucket DataIonoscloudS3Objects#bucket}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.delimiter">delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#delimiter DataIonoscloudS3Objects#delimiter}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.encodingType">encoding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#encoding_type DataIonoscloudS3Objects#encoding_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.fetchOwner">fetch_owner</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#fetch_owner DataIonoscloudS3Objects#fetch_owner}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.maxKeys">max_keys</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#max_keys DataIonoscloudS3Objects#max_keys}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#prefix DataIonoscloudS3Objects#prefix}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.startAfter">start_after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#start_after DataIonoscloudS3Objects#start_after}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#bucket DataIonoscloudS3Objects#bucket}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.delimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#delimiter DataIonoscloudS3Objects#delimiter}.

---

##### `encoding_type`<sup>Optional</sup> <a name="encoding_type" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.encodingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#encoding_type DataIonoscloudS3Objects#encoding_type}.

---

##### `fetch_owner`<sup>Optional</sup> <a name="fetch_owner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.fetchOwner"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#fetch_owner DataIonoscloudS3Objects#fetch_owner}.

---

##### `max_keys`<sup>Optional</sup> <a name="max_keys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.maxKeys"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#max_keys DataIonoscloudS3Objects#max_keys}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#prefix DataIonoscloudS3Objects#prefix}.

---

##### `start_after`<sup>Optional</sup> <a name="start_after" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.startAfter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#start_after DataIonoscloudS3Objects#start_after}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetEncodingType">reset_encoding_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetFetchOwner">reset_fetch_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetMaxKeys">reset_max_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetStartAfter">reset_start_after</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_encoding_type` <a name="reset_encoding_type" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetEncodingType"></a>

```python
def reset_encoding_type() -> None
```

##### `reset_fetch_owner` <a name="reset_fetch_owner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetFetchOwner"></a>

```python
def reset_fetch_owner() -> None
```

##### `reset_max_keys` <a name="reset_max_keys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetMaxKeys"></a>

```python
def reset_max_keys() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_start_after` <a name="reset_start_after" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetStartAfter"></a>

```python
def reset_start_after() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudS3Objects resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_s3_objects

dataIonoscloudS3Objects.DataIonoscloudS3Objects.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_s3_objects

dataIonoscloudS3Objects.DataIonoscloudS3Objects.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_s3_objects

dataIonoscloudS3Objects.DataIonoscloudS3Objects.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_s3_objects

dataIonoscloudS3Objects.DataIonoscloudS3Objects.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudS3Objects resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudS3Objects to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudS3Objects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudS3Objects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.commonPrefixes">common_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.keys">keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.owners">owners</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingTypeInput">encoding_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwnerInput">fetch_owner_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeysInput">max_keys_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfterInput">start_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingType">encoding_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwner">fetch_owner</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeys">max_keys</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfter">start_after</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `common_prefixes`<sup>Required</sup> <a name="common_prefixes" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.commonPrefixes"></a>

```python
common_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.owners"></a>

```python
owners: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `encoding_type_input`<sup>Optional</sup> <a name="encoding_type_input" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingTypeInput"></a>

```python
encoding_type_input: str
```

- *Type:* str

---

##### `fetch_owner_input`<sup>Optional</sup> <a name="fetch_owner_input" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwnerInput"></a>

```python
fetch_owner_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_keys_input`<sup>Optional</sup> <a name="max_keys_input" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeysInput"></a>

```python
max_keys_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `start_after_input`<sup>Optional</sup> <a name="start_after_input" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfterInput"></a>

```python
start_after_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `encoding_type`<sup>Required</sup> <a name="encoding_type" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingType"></a>

```python
encoding_type: str
```

- *Type:* str

---

##### `fetch_owner`<sup>Required</sup> <a name="fetch_owner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwner"></a>

```python
fetch_owner: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_keys`<sup>Required</sup> <a name="max_keys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeys"></a>

```python
max_keys: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `start_after`<sup>Required</sup> <a name="start_after" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfter"></a>

```python
start_after: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudS3ObjectsConfig <a name="DataIonoscloudS3ObjectsConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_s3_objects

dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  delimiter: str = None,
  encoding_type: str = None,
  fetch_owner: typing.Union[bool, IResolvable] = None,
  max_keys: typing.Union[int, float] = None,
  prefix: str = None,
  start_after: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#bucket DataIonoscloudS3Objects#bucket}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.delimiter">delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#delimiter DataIonoscloudS3Objects#delimiter}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.encodingType">encoding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#encoding_type DataIonoscloudS3Objects#encoding_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.fetchOwner">fetch_owner</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#fetch_owner DataIonoscloudS3Objects#fetch_owner}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.maxKeys">max_keys</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#max_keys DataIonoscloudS3Objects#max_keys}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#prefix DataIonoscloudS3Objects#prefix}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.startAfter">start_after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#start_after DataIonoscloudS3Objects#start_after}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#bucket DataIonoscloudS3Objects#bucket}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#delimiter DataIonoscloudS3Objects#delimiter}.

---

##### `encoding_type`<sup>Optional</sup> <a name="encoding_type" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.encodingType"></a>

```python
encoding_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#encoding_type DataIonoscloudS3Objects#encoding_type}.

---

##### `fetch_owner`<sup>Optional</sup> <a name="fetch_owner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.fetchOwner"></a>

```python
fetch_owner: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#fetch_owner DataIonoscloudS3Objects#fetch_owner}.

---

##### `max_keys`<sup>Optional</sup> <a name="max_keys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.maxKeys"></a>

```python
max_keys: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#max_keys DataIonoscloudS3Objects#max_keys}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#prefix DataIonoscloudS3Objects#prefix}.

---

##### `start_after`<sup>Optional</sup> <a name="start_after" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.startAfter"></a>

```python
start_after: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/data-sources/s3_objects#start_after DataIonoscloudS3Objects#start_after}.

---


