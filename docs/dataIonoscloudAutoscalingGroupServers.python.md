# `dataIonoscloudAutoscalingGroupServers` Submodule <a name="`dataIonoscloudAutoscalingGroupServers` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudAutoscalingGroupServers <a name="DataIonoscloudAutoscalingGroupServers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/data-sources/autoscaling_group_servers ionoscloud_autoscaling_group_servers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group_servers

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Unique identifier for the group. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/data-sources/autoscaling_group_servers#id DataIonoscloudAutoscalingGroupServers#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.groupId"></a>

- *Type:* str

Unique identifier for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/data-sources/autoscaling_group_servers#group_id DataIonoscloudAutoscalingGroupServers#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/data-sources/autoscaling_group_servers#id DataIonoscloudAutoscalingGroupServers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudAutoscalingGroupServers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group_servers

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group_servers

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group_servers

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group_servers

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudAutoscalingGroupServers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudAutoscalingGroupServers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudAutoscalingGroupServers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/data-sources/autoscaling_group_servers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudAutoscalingGroupServers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.servers">servers</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList">DataIonoscloudAutoscalingGroupServersServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.servers"></a>

```python
servers: DataIonoscloudAutoscalingGroupServersServersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList">DataIonoscloudAutoscalingGroupServersServersList</a>

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudAutoscalingGroupServersConfig <a name="DataIonoscloudAutoscalingGroupServersConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group_servers

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.groupId">group_id</a></code> | <code>str</code> | Unique identifier for the group. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/data-sources/autoscaling_group_servers#id DataIonoscloudAutoscalingGroupServers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Unique identifier for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/data-sources/autoscaling_group_servers#group_id DataIonoscloudAutoscalingGroupServers#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/data-sources/autoscaling_group_servers#id DataIonoscloudAutoscalingGroupServers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataIonoscloudAutoscalingGroupServersServers <a name="DataIonoscloudAutoscalingGroupServersServers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServers.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group_servers

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudAutoscalingGroupServersServersList <a name="DataIonoscloudAutoscalingGroupServersServersList" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group_servers

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudAutoscalingGroupServersServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudAutoscalingGroupServersServersOutputReference <a name="DataIonoscloudAutoscalingGroupServersServersOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_autoscaling_group_servers

dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServers">DataIonoscloudAutoscalingGroupServersServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServersOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudAutoscalingGroupServersServers
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudAutoscalingGroupServers.DataIonoscloudAutoscalingGroupServersServers">DataIonoscloudAutoscalingGroupServersServers</a>

---



