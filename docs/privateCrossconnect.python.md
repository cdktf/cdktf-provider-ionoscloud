# `privateCrossconnect` Submodule <a name="`privateCrossconnect` Submodule" id="@cdktf/provider-ionoscloud.privateCrossconnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateCrossconnect <a name="PrivateCrossconnect" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect ionoscloud_private_crossconnect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnect(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  connectable_datacenters: typing.Union[IResolvable, typing.List[PrivateCrossconnectConnectableDatacenters]] = None,
  description: str = None,
  id: str = None,
  peers: typing.Union[IResolvable, typing.List[PrivateCrossconnectPeers]] = None,
  timeouts: PrivateCrossconnectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.name">name</a></code> | <code>str</code> | The desired name. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.connectableDatacenters">connectable_datacenters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters">PrivateCrossconnectConnectableDatacenters</a>]]</code> | connectable_datacenters block. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.description">description</a></code> | <code>str</code> | The desired description. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#id PrivateCrossconnect#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.peers">peers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers">PrivateCrossconnectPeers</a>]]</code> | peers block. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts">PrivateCrossconnectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.name"></a>

- *Type:* str

The desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#name PrivateCrossconnect#name}

---

##### `connectable_datacenters`<sup>Optional</sup> <a name="connectable_datacenters" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.connectableDatacenters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters">PrivateCrossconnectConnectableDatacenters</a>]]

connectable_datacenters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#connectable_datacenters PrivateCrossconnect#connectable_datacenters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.description"></a>

- *Type:* str

The desired description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#description PrivateCrossconnect#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#id PrivateCrossconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peers`<sup>Optional</sup> <a name="peers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.peers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers">PrivateCrossconnectPeers</a>]]

peers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#peers PrivateCrossconnect#peers}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts">PrivateCrossconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#timeouts PrivateCrossconnect#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putConnectableDatacenters">put_connectable_datacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putPeers">put_peers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetConnectableDatacenters">reset_connectable_datacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetPeers">reset_peers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connectable_datacenters` <a name="put_connectable_datacenters" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putConnectableDatacenters"></a>

```python
def put_connectable_datacenters(
  value: typing.Union[IResolvable, typing.List[PrivateCrossconnectConnectableDatacenters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putConnectableDatacenters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters">PrivateCrossconnectConnectableDatacenters</a>]]

---

##### `put_peers` <a name="put_peers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putPeers"></a>

```python
def put_peers(
  value: typing.Union[IResolvable, typing.List[PrivateCrossconnectPeers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putPeers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers">PrivateCrossconnectPeers</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#create PrivateCrossconnect#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#default PrivateCrossconnect#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#delete PrivateCrossconnect#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#update PrivateCrossconnect#update}.

---

##### `reset_connectable_datacenters` <a name="reset_connectable_datacenters" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetConnectableDatacenters"></a>

```python
def reset_connectable_datacenters() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_peers` <a name="reset_peers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetPeers"></a>

```python
def reset_peers() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrivateCrossconnect resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnect.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnect.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnect.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnect.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrivateCrossconnect resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrivateCrossconnect to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrivateCrossconnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateCrossconnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.connectableDatacenters">connectable_datacenters</a></code> | <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList">PrivateCrossconnectConnectableDatacentersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.peers">peers</a></code> | <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList">PrivateCrossconnectPeersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference">PrivateCrossconnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.connectableDatacentersInput">connectable_datacenters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters">PrivateCrossconnectConnectableDatacenters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.peersInput">peers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers">PrivateCrossconnectPeers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts">PrivateCrossconnectTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connectable_datacenters`<sup>Required</sup> <a name="connectable_datacenters" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.connectableDatacenters"></a>

```python
connectable_datacenters: PrivateCrossconnectConnectableDatacentersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList">PrivateCrossconnectConnectableDatacentersList</a>

---

##### `peers`<sup>Required</sup> <a name="peers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.peers"></a>

```python
peers: PrivateCrossconnectPeersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList">PrivateCrossconnectPeersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.timeouts"></a>

```python
timeouts: PrivateCrossconnectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference">PrivateCrossconnectTimeoutsOutputReference</a>

---

##### `connectable_datacenters_input`<sup>Optional</sup> <a name="connectable_datacenters_input" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.connectableDatacentersInput"></a>

```python
connectable_datacenters_input: typing.Union[IResolvable, typing.List[PrivateCrossconnectConnectableDatacenters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters">PrivateCrossconnectConnectableDatacenters</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peers_input`<sup>Optional</sup> <a name="peers_input" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.peersInput"></a>

```python
peers_input: typing.Union[IResolvable, typing.List[PrivateCrossconnectPeers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers">PrivateCrossconnectPeers</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PrivateCrossconnectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts">PrivateCrossconnectTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateCrossconnectConfig <a name="PrivateCrossconnectConfig" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  connectable_datacenters: typing.Union[IResolvable, typing.List[PrivateCrossconnectConnectableDatacenters]] = None,
  description: str = None,
  id: str = None,
  peers: typing.Union[IResolvable, typing.List[PrivateCrossconnectPeers]] = None,
  timeouts: PrivateCrossconnectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.name">name</a></code> | <code>str</code> | The desired name. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.connectableDatacenters">connectable_datacenters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters">PrivateCrossconnectConnectableDatacenters</a>]]</code> | connectable_datacenters block. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.description">description</a></code> | <code>str</code> | The desired description. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#id PrivateCrossconnect#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.peers">peers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers">PrivateCrossconnectPeers</a>]]</code> | peers block. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts">PrivateCrossconnectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#name PrivateCrossconnect#name}

---

##### `connectable_datacenters`<sup>Optional</sup> <a name="connectable_datacenters" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.connectableDatacenters"></a>

```python
connectable_datacenters: typing.Union[IResolvable, typing.List[PrivateCrossconnectConnectableDatacenters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters">PrivateCrossconnectConnectableDatacenters</a>]]

connectable_datacenters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#connectable_datacenters PrivateCrossconnect#connectable_datacenters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The desired description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#description PrivateCrossconnect#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#id PrivateCrossconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peers`<sup>Optional</sup> <a name="peers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.peers"></a>

```python
peers: typing.Union[IResolvable, typing.List[PrivateCrossconnectPeers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers">PrivateCrossconnectPeers</a>]]

peers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#peers PrivateCrossconnect#peers}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.timeouts"></a>

```python
timeouts: PrivateCrossconnectTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts">PrivateCrossconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#timeouts PrivateCrossconnect#timeouts}

---

### PrivateCrossconnectConnectableDatacenters <a name="PrivateCrossconnectConnectableDatacenters" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnectConnectableDatacenters()
```


### PrivateCrossconnectPeers <a name="PrivateCrossconnectPeers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnectPeers()
```


### PrivateCrossconnectTimeouts <a name="PrivateCrossconnectTimeouts" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnectTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#create PrivateCrossconnect#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#default PrivateCrossconnect#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#delete PrivateCrossconnect#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#update PrivateCrossconnect#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#create PrivateCrossconnect#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#default PrivateCrossconnect#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#delete PrivateCrossconnect#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/private_crossconnect#update PrivateCrossconnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateCrossconnectConnectableDatacentersList <a name="PrivateCrossconnectConnectableDatacentersList" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnectConnectableDatacentersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrivateCrossconnectConnectableDatacentersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters">PrivateCrossconnectConnectableDatacenters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PrivateCrossconnectConnectableDatacenters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters">PrivateCrossconnectConnectableDatacenters</a>]]

---


### PrivateCrossconnectConnectableDatacentersOutputReference <a name="PrivateCrossconnectConnectableDatacentersOutputReference" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters">PrivateCrossconnectConnectableDatacenters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrivateCrossconnectConnectableDatacenters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters">PrivateCrossconnectConnectableDatacenters</a>]

---


### PrivateCrossconnectPeersList <a name="PrivateCrossconnectPeersList" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnectPeersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrivateCrossconnectPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers">PrivateCrossconnectPeers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PrivateCrossconnectPeers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers">PrivateCrossconnectPeers</a>]]

---


### PrivateCrossconnectPeersOutputReference <a name="PrivateCrossconnectPeersOutputReference" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnectPeersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.datacenterName">datacenter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.lanId">lan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.lanName">lan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers">PrivateCrossconnectPeers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `datacenter_name`<sup>Required</sup> <a name="datacenter_name" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.datacenterName"></a>

```python
datacenter_name: str
```

- *Type:* str

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

---

##### `lan_name`<sup>Required</sup> <a name="lan_name" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.lanName"></a>

```python
lan_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrivateCrossconnectPeers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers">PrivateCrossconnectPeers</a>]

---


### PrivateCrossconnectTimeoutsOutputReference <a name="PrivateCrossconnectTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import private_crossconnect

privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts">PrivateCrossconnectTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrivateCrossconnectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts">PrivateCrossconnectTimeouts</a>]

---



