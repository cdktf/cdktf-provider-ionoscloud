# `dataIonoscloudVpnWireguardPeer` Submodule <a name="`dataIonoscloudVpnWireguardPeer` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudVpnWireguardPeer <a name="DataIonoscloudVpnWireguardPeer" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/vpn_wireguard_peer ionoscloud_vpn_wireguard_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudvpnwireguardpeer"

dataionoscloudvpnwireguardpeer.NewDataIonoscloudVpnWireguardPeer(scope Construct, id *string, config DataIonoscloudVpnWireguardPeerConfig) DataIonoscloudVpnWireguardPeer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig">DataIonoscloudVpnWireguardPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig">DataIonoscloudVpnWireguardPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudVpnWireguardPeer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudvpnwireguardpeer"

dataionoscloudvpnwireguardpeer.DataIonoscloudVpnWireguardPeer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudvpnwireguardpeer"

dataionoscloudvpnwireguardpeer.DataIonoscloudVpnWireguardPeer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudvpnwireguardpeer"

dataionoscloudvpnwireguardpeer.DataIonoscloudVpnWireguardPeer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudvpnwireguardpeer"

dataionoscloudvpnwireguardpeer.DataIonoscloudVpnWireguardPeer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataIonoscloudVpnWireguardPeer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataIonoscloudVpnWireguardPeer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataIonoscloudVpnWireguardPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/vpn_wireguard_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudVpnWireguardPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.allowedIps">AllowedIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList">DataIonoscloudVpnWireguardPeerEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllowedIps`<sup>Required</sup> <a name="AllowedIps" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.allowedIps"></a>

```go
func AllowedIps() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.endpoint"></a>

```go
func Endpoint() DataIonoscloudVpnWireguardPeerEndpointList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList">DataIonoscloudVpnWireguardPeerEndpointList</a>

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudVpnWireguardPeerConfig <a name="DataIonoscloudVpnWireguardPeerConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudvpnwireguardpeer"

&dataionoscloudvpnwireguardpeer.DataIonoscloudVpnWireguardPeerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayId: *string,
	Id: *string,
	Location: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.gatewayId">GatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/vpn_wireguard_peer#gateway_id DataIonoscloudVpnWireguardPeer#gateway_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/vpn_wireguard_peer#id DataIonoscloudVpnWireguardPeer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.location">Location</a></code> | <code>*string</code> | The location of the WireGuard Peer. Supported locations: de/fra, de/txl. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/vpn_wireguard_peer#name DataIonoscloudVpnWireguardPeer#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/vpn_wireguard_peer#gateway_id DataIonoscloudVpnWireguardPeer#gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/vpn_wireguard_peer#id DataIonoscloudVpnWireguardPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the WireGuard Peer. Supported locations: de/fra, de/txl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/vpn_wireguard_peer#location DataIonoscloudVpnWireguardPeer#location}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/data-sources/vpn_wireguard_peer#name DataIonoscloudVpnWireguardPeer#name}.

---

### DataIonoscloudVpnWireguardPeerEndpoint <a name="DataIonoscloudVpnWireguardPeerEndpoint" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudvpnwireguardpeer"

&dataionoscloudvpnwireguardpeer.DataIonoscloudVpnWireguardPeerEndpoint {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudVpnWireguardPeerEndpointList <a name="DataIonoscloudVpnWireguardPeerEndpointList" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudvpnwireguardpeer"

dataionoscloudvpnwireguardpeer.NewDataIonoscloudVpnWireguardPeerEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudVpnWireguardPeerEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.get"></a>

```go
func Get(index *f64) DataIonoscloudVpnWireguardPeerEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataIonoscloudVpnWireguardPeerEndpointOutputReference <a name="DataIonoscloudVpnWireguardPeerEndpointOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudvpnwireguardpeer"

dataionoscloudvpnwireguardpeer.NewDataIonoscloudVpnWireguardPeerEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudVpnWireguardPeerEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpoint">DataIonoscloudVpnWireguardPeerEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudVpnWireguardPeerEndpoint
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardPeer.DataIonoscloudVpnWireguardPeerEndpoint">DataIonoscloudVpnWireguardPeerEndpoint</a>

---



