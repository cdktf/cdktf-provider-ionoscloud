# `dataIonoscloudAutoscalingGroup` Submodule <a name="`dataIonoscloudAutoscalingGroup` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudAutoscalingGroup <a name="DataIonoscloudAutoscalingGroup" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group ionoscloud_autoscaling_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  timeouts: DataIonoscloudAutoscalingGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | UUID of the Autoscaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | User-defined name for the Autoscaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts">DataIonoscloudAutoscalingGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.id"></a>

- *Type:* str

UUID of the Autoscaling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#id DataIonoscloudAutoscalingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.name"></a>

- *Type:* str

User-defined name for the Autoscaling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#name DataIonoscloudAutoscalingGroup#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts">DataIonoscloudAutoscalingGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#timeouts DataIonoscloudAutoscalingGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#create DataIonoscloudAutoscalingGroup#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#default DataIonoscloudAutoscalingGroup#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#delete DataIonoscloudAutoscalingGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#update DataIonoscloudAutoscalingGroup#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudAutoscalingGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudAutoscalingGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudAutoscalingGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudAutoscalingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudAutoscalingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.maxReplicaCount">max_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.minReplicaCount">min_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList">DataIonoscloudAutoscalingGroupPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.replicaConfiguration">replica_configuration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList">DataIonoscloudAutoscalingGroupReplicaConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.targetReplicaCount">target_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference">DataIonoscloudAutoscalingGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts">DataIonoscloudAutoscalingGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_replica_count`<sup>Required</sup> <a name="max_replica_count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.maxReplicaCount"></a>

```python
max_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.minReplicaCount"></a>

```python
min_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.policy"></a>

```python
policy: DataIonoscloudAutoscalingGroupPolicyList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList">DataIonoscloudAutoscalingGroupPolicyList</a>

---

##### `replica_configuration`<sup>Required</sup> <a name="replica_configuration" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.replicaConfiguration"></a>

```python
replica_configuration: DataIonoscloudAutoscalingGroupReplicaConfigurationList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList">DataIonoscloudAutoscalingGroupReplicaConfigurationList</a>

---

##### `target_replica_count`<sup>Required</sup> <a name="target_replica_count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.targetReplicaCount"></a>

```python
target_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.timeouts"></a>

```python
timeouts: DataIonoscloudAutoscalingGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference">DataIonoscloudAutoscalingGroupTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataIonoscloudAutoscalingGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts">DataIonoscloudAutoscalingGroupTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudAutoscalingGroupConfig <a name="DataIonoscloudAutoscalingGroupConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  timeouts: DataIonoscloudAutoscalingGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.id">id</a></code> | <code>str</code> | UUID of the Autoscaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.name">name</a></code> | <code>str</code> | User-defined name for the Autoscaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts">DataIonoscloudAutoscalingGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

UUID of the Autoscaling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#id DataIonoscloudAutoscalingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

User-defined name for the Autoscaling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#name DataIonoscloudAutoscalingGroup#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupConfig.property.timeouts"></a>

```python
timeouts: DataIonoscloudAutoscalingGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts">DataIonoscloudAutoscalingGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#timeouts DataIonoscloudAutoscalingGroup#timeouts}

---

### DataIonoscloudAutoscalingGroupPolicy <a name="DataIonoscloudAutoscalingGroupPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicy()
```


### DataIonoscloudAutoscalingGroupPolicyScaleInAction <a name="DataIonoscloudAutoscalingGroupPolicyScaleInAction" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInAction.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInAction()
```


### DataIonoscloudAutoscalingGroupPolicyScaleOutAction <a name="DataIonoscloudAutoscalingGroupPolicyScaleOutAction" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutAction.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutAction()
```


### DataIonoscloudAutoscalingGroupReplicaConfiguration <a name="DataIonoscloudAutoscalingGroupReplicaConfiguration" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfiguration()
```


### DataIonoscloudAutoscalingGroupReplicaConfigurationNic <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNic" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNic.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNic()
```


### DataIonoscloudAutoscalingGroupReplicaConfigurationVolume <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationVolume" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolume()
```


### DataIonoscloudAutoscalingGroupTimeouts <a name="DataIonoscloudAutoscalingGroupTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#create DataIonoscloudAutoscalingGroup#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#default DataIonoscloudAutoscalingGroup#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#delete DataIonoscloudAutoscalingGroup#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#update DataIonoscloudAutoscalingGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#create DataIonoscloudAutoscalingGroup#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#default DataIonoscloudAutoscalingGroup#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#delete DataIonoscloudAutoscalingGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.11/docs/data-sources/autoscaling_group#update DataIonoscloudAutoscalingGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudAutoscalingGroupPolicyList <a name="DataIonoscloudAutoscalingGroupPolicyList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudAutoscalingGroupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudAutoscalingGroupPolicyOutputReference <a name="DataIonoscloudAutoscalingGroupPolicyOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.range">range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleInAction">scale_in_action</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList">DataIonoscloudAutoscalingGroupPolicyScaleInActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleInThreshold">scale_in_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleOutAction">scale_out_action</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList">DataIonoscloudAutoscalingGroupPolicyScaleOutActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleOutThreshold">scale_out_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicy">DataIonoscloudAutoscalingGroupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.range"></a>

```python
range: str
```

- *Type:* str

---

##### `scale_in_action`<sup>Required</sup> <a name="scale_in_action" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleInAction"></a>

```python
scale_in_action: DataIonoscloudAutoscalingGroupPolicyScaleInActionList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList">DataIonoscloudAutoscalingGroupPolicyScaleInActionList</a>

---

##### `scale_in_threshold`<sup>Required</sup> <a name="scale_in_threshold" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleInThreshold"></a>

```python
scale_in_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_action`<sup>Required</sup> <a name="scale_out_action" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleOutAction"></a>

```python
scale_out_action: DataIonoscloudAutoscalingGroupPolicyScaleOutActionList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList">DataIonoscloudAutoscalingGroupPolicyScaleOutActionList</a>

---

##### `scale_out_threshold`<sup>Required</sup> <a name="scale_out_threshold" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.scaleOutThreshold"></a>

```python
scale_out_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudAutoscalingGroupPolicy
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicy">DataIonoscloudAutoscalingGroupPolicy</a>

---


### DataIonoscloudAutoscalingGroupPolicyScaleInActionList <a name="DataIonoscloudAutoscalingGroupPolicyScaleInActionList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference <a name="DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.amountType">amount_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriod">cooldown_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumes">delete_volumes</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyType">termination_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInAction">DataIonoscloudAutoscalingGroupPolicyScaleInAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `amount_type`<sup>Required</sup> <a name="amount_type" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.amountType"></a>

```python
amount_type: str
```

- *Type:* str

---

##### `cooldown_period`<sup>Required</sup> <a name="cooldown_period" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriod"></a>

```python
cooldown_period: str
```

- *Type:* str

---

##### `delete_volumes`<sup>Required</sup> <a name="delete_volumes" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumes"></a>

```python
delete_volumes: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `termination_policy_type`<sup>Required</sup> <a name="termination_policy_type" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyType"></a>

```python
termination_policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInActionOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudAutoscalingGroupPolicyScaleInAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleInAction">DataIonoscloudAutoscalingGroupPolicyScaleInAction</a>

---


### DataIonoscloudAutoscalingGroupPolicyScaleOutActionList <a name="DataIonoscloudAutoscalingGroupPolicyScaleOutActionList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference <a name="DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.amountType">amount_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriod">cooldown_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutAction">DataIonoscloudAutoscalingGroupPolicyScaleOutAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `amount_type`<sup>Required</sup> <a name="amount_type" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.amountType"></a>

```python
amount_type: str
```

- *Type:* str

---

##### `cooldown_period`<sup>Required</sup> <a name="cooldown_period" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriod"></a>

```python
cooldown_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutActionOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudAutoscalingGroupPolicyScaleOutAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupPolicyScaleOutAction">DataIonoscloudAutoscalingGroupPolicyScaleOutAction</a>

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationList <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicList <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcp">dhcp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.lan">lan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNic">DataIonoscloudAutoscalingGroupReplicaConfigurationNic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcp"></a>

```python
dhcp: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.lan"></a>

```python
lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudAutoscalingGroupReplicaConfigurationNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNic">DataIonoscloudAutoscalingGroupReplicaConfigurationNic</a>

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamily">cpu_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList">DataIonoscloudAutoscalingGroupReplicaConfigurationNicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList">DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfiguration">DataIonoscloudAutoscalingGroupReplicaConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_family`<sup>Required</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamily"></a>

```python
cpu_family: str
```

- *Type:* str

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.nic"></a>

```python
nic: DataIonoscloudAutoscalingGroupReplicaConfigurationNicList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationNicList">DataIonoscloudAutoscalingGroupReplicaConfigurationNicList</a>

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.volume"></a>

```python
volume: DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList">DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudAutoscalingGroupReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfiguration">DataIonoscloudAutoscalingGroupReplicaConfiguration</a>

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference <a name="DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitId">backup_unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrder">boot_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bus">bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAlias">image_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolume">DataIonoscloudAutoscalingGroupReplicaConfigurationVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_unit_id`<sup>Required</sup> <a name="backup_unit_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitId"></a>

```python
backup_unit_id: str
```

- *Type:* str

---

##### `boot_order`<sup>Required</sup> <a name="boot_order" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrder"></a>

```python
boot_order: str
```

- *Type:* str

---

##### `bus`<sup>Required</sup> <a name="bus" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bus"></a>

```python
bus: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_alias`<sup>Required</sup> <a name="image_alias" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAlias"></a>

```python
image_alias: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolumeOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudAutoscalingGroupReplicaConfigurationVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupReplicaConfigurationVolume">DataIonoscloudAutoscalingGroupReplicaConfigurationVolume</a>

---


### DataIonoscloudAutoscalingGroupTimeoutsOutputReference <a name="DataIonoscloudAutoscalingGroupTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group

dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts">DataIonoscloudAutoscalingGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataIonoscloudAutoscalingGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroup.DataIonoscloudAutoscalingGroupTimeouts">DataIonoscloudAutoscalingGroupTimeouts</a>]

---


