# `vpnIpsecTunnel` Submodule <a name="`vpnIpsecTunnel` Submodule" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnIpsecTunnel <a name="VpnIpsecTunnel" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel ionoscloud_vpn_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

vpnipsectunnel.NewVpnIpsecTunnel(scope Construct, id *string, config VpnIpsecTunnelConfig) VpnIpsecTunnel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig">VpnIpsecTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig">VpnIpsecTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putAuth">PutAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putEsp">PutEsp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putIke">PutIke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuth` <a name="PutAuth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putAuth"></a>

```go
func PutAuth(value VpnIpsecTunnelAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

---

##### `PutEsp` <a name="PutEsp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putEsp"></a>

```go
func PutEsp(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putEsp.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIke` <a name="PutIke" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putIke"></a>

```go
func PutIke(value VpnIpsecTunnelIke)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putIke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putTimeouts"></a>

```go
func PutTimeouts(value VpnIpsecTunnelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpnIpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

vpnipsectunnel.VpnIpsecTunnel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

vpnipsectunnel.VpnIpsecTunnel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

vpnipsectunnel.VpnIpsecTunnel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

vpnipsectunnel.VpnIpsecTunnel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpnIpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpnIpsecTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpnIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpnIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference">VpnIpsecTunnelAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.esp">Esp</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList">VpnIpsecTunnelEspList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ike">Ike</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference">VpnIpsecTunnelIkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference">VpnIpsecTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.authInput">AuthInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrsInput">CloudNetworkCidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.espInput">EspInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ikeInput">IkeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrsInput">PeerNetworkCidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHostInput">RemoteHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrs">CloudNetworkCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrs">PeerNetworkCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHost">RemoteHost</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.auth"></a>

```go
func Auth() VpnIpsecTunnelAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference">VpnIpsecTunnelAuthOutputReference</a>

---

##### `Esp`<sup>Required</sup> <a name="Esp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.esp"></a>

```go
func Esp() VpnIpsecTunnelEspList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList">VpnIpsecTunnelEspList</a>

---

##### `Ike`<sup>Required</sup> <a name="Ike" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ike"></a>

```go
func Ike() VpnIpsecTunnelIkeOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference">VpnIpsecTunnelIkeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeouts"></a>

```go
func Timeouts() VpnIpsecTunnelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference">VpnIpsecTunnelTimeoutsOutputReference</a>

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.authInput"></a>

```go
func AuthInput() VpnIpsecTunnelAuth
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

---

##### `CloudNetworkCidrsInput`<sup>Optional</sup> <a name="CloudNetworkCidrsInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrsInput"></a>

```go
func CloudNetworkCidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EspInput`<sup>Optional</sup> <a name="EspInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.espInput"></a>

```go
func EspInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IkeInput`<sup>Optional</sup> <a name="IkeInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ikeInput"></a>

```go
func IkeInput() VpnIpsecTunnelIke
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeerNetworkCidrsInput`<sup>Optional</sup> <a name="PeerNetworkCidrsInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrsInput"></a>

```go
func PeerNetworkCidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RemoteHostInput`<sup>Optional</sup> <a name="RemoteHostInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHostInput"></a>

```go
func RemoteHostInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CloudNetworkCidrs`<sup>Required</sup> <a name="CloudNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrs"></a>

```go
func CloudNetworkCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PeerNetworkCidrs`<sup>Required</sup> <a name="PeerNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrs"></a>

```go
func PeerNetworkCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `RemoteHost`<sup>Required</sup> <a name="RemoteHost" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHost"></a>

```go
func RemoteHost() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnIpsecTunnelAuth <a name="VpnIpsecTunnelAuth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

&vpnipsectunnel.VpnIpsecTunnelAuth {
	Method: *string,
	PskKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.method">Method</a></code> | <code>*string</code> | The Authentication Method to use for IPSec Authentication. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.pskKey">PskKey</a></code> | <code>*string</code> | The Pre-Shared Key to use for IPSec Authentication. Note: Required if method is PSK. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.method"></a>

```go
Method *string
```

- *Type:* *string

The Authentication Method to use for IPSec Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#method VpnIpsecTunnel#method}

---

##### `PskKey`<sup>Optional</sup> <a name="PskKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.pskKey"></a>

```go
PskKey *string
```

- *Type:* *string

The Pre-Shared Key to use for IPSec Authentication. Note: Required if method is PSK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#psk_key VpnIpsecTunnel#psk_key}

---

### VpnIpsecTunnelConfig <a name="VpnIpsecTunnelConfig" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

&vpnipsectunnel.VpnIpsecTunnelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Auth: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.vpnIpsecTunnel.VpnIpsecTunnelAuth,
	CloudNetworkCidrs: *[]*string,
	Esp: interface{},
	GatewayId: *string,
	Ike: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.vpnIpsecTunnel.VpnIpsecTunnelIke,
	Location: *string,
	Name: *string,
	PeerNetworkCidrs: *[]*string,
	RemoteHost: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.vpnIpsecTunnel.VpnIpsecTunnelTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.cloudNetworkCidrs">CloudNetworkCidrs</a></code> | <code>*[]*string</code> | The network CIDRs on the "Left" side that are allowed to connect to the IPSec tunnel, i.e. the CIDRs within your IONOS Cloud LAN. Specify "0.0.0.0/0" or "::/0" for all addresses. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.esp">Esp</a></code> | <code>interface{}</code> | esp block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.gatewayId">GatewayId</a></code> | <code>*string</code> | The ID of the IPSec Gateway that the tunnel belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.ike">Ike</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | ike block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.location">Location</a></code> | <code>*string</code> | The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/txl. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.name">Name</a></code> | <code>*string</code> | The human-readable name of your IPSec Gateway Tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.peerNetworkCidrs">PeerNetworkCidrs</a></code> | <code>*[]*string</code> | The network CIDRs on the "Right" side that are allowed to connect to the IPSec tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.remoteHost">RemoteHost</a></code> | <code>*string</code> | The remote peer host fully qualified domain name or public IPV4 IP to connect to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.description">Description</a></code> | <code>*string</code> | The human-readable description of your IPSec Gateway Tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#id VpnIpsecTunnel#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.auth"></a>

```go
Auth VpnIpsecTunnelAuth
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#auth VpnIpsecTunnel#auth}

---

##### `CloudNetworkCidrs`<sup>Required</sup> <a name="CloudNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.cloudNetworkCidrs"></a>

```go
CloudNetworkCidrs *[]*string
```

- *Type:* *[]*string

The network CIDRs on the "Left" side that are allowed to connect to the IPSec tunnel, i.e. the CIDRs within your IONOS Cloud LAN. Specify "0.0.0.0/0" or "::/0" for all addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#cloud_network_cidrs VpnIpsecTunnel#cloud_network_cidrs}

---

##### `Esp`<sup>Required</sup> <a name="Esp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.esp"></a>

```go
Esp interface{}
```

- *Type:* interface{}

esp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#esp VpnIpsecTunnel#esp}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

The ID of the IPSec Gateway that the tunnel belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#gateway_id VpnIpsecTunnel#gateway_id}

---

##### `Ike`<sup>Required</sup> <a name="Ike" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.ike"></a>

```go
Ike VpnIpsecTunnelIke
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

ike block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#ike VpnIpsecTunnel#ike}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/txl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#location VpnIpsecTunnel#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The human-readable name of your IPSec Gateway Tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#name VpnIpsecTunnel#name}

---

##### `PeerNetworkCidrs`<sup>Required</sup> <a name="PeerNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.peerNetworkCidrs"></a>

```go
PeerNetworkCidrs *[]*string
```

- *Type:* *[]*string

The network CIDRs on the "Right" side that are allowed to connect to the IPSec tunnel.

Specify "0.0.0.0/0" or "::/0" for all addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#peer_network_cidrs VpnIpsecTunnel#peer_network_cidrs}

---

##### `RemoteHost`<sup>Required</sup> <a name="RemoteHost" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.remoteHost"></a>

```go
RemoteHost *string
```

- *Type:* *string

The remote peer host fully qualified domain name or public IPV4 IP to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#remote_host VpnIpsecTunnel#remote_host}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The human-readable description of your IPSec Gateway Tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#description VpnIpsecTunnel#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#id VpnIpsecTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.timeouts"></a>

```go
Timeouts VpnIpsecTunnelTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#timeouts VpnIpsecTunnel#timeouts}

---

### VpnIpsecTunnelEsp <a name="VpnIpsecTunnelEsp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

&vpnipsectunnel.VpnIpsecTunnelEsp {
	DiffieHellmanGroup: *string,
	EncryptionAlgorithm: *string,
	IntegrityAlgorithm: *string,
	Lifetime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.diffieHellmanGroup">DiffieHellmanGroup</a></code> | <code>*string</code> | The Diffie-Hellman Group to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | The encryption algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.integrityAlgorithm">IntegrityAlgorithm</a></code> | <code>*string</code> | The integrity algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.lifetime">Lifetime</a></code> | <code>*f64</code> | The phase lifetime in seconds. |

---

##### `DiffieHellmanGroup`<sup>Optional</sup> <a name="DiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.diffieHellmanGroup"></a>

```go
DiffieHellmanGroup *string
```

- *Type:* *string

The Diffie-Hellman Group to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#diffie_hellman_group VpnIpsecTunnel#diffie_hellman_group}

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.encryptionAlgorithm"></a>

```go
EncryptionAlgorithm *string
```

- *Type:* *string

The encryption algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#encryption_algorithm VpnIpsecTunnel#encryption_algorithm}

---

##### `IntegrityAlgorithm`<sup>Optional</sup> <a name="IntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.integrityAlgorithm"></a>

```go
IntegrityAlgorithm *string
```

- *Type:* *string

The integrity algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#integrity_algorithm VpnIpsecTunnel#integrity_algorithm}

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.lifetime"></a>

```go
Lifetime *f64
```

- *Type:* *f64

The phase lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#lifetime VpnIpsecTunnel#lifetime}

---

### VpnIpsecTunnelIke <a name="VpnIpsecTunnelIke" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

&vpnipsectunnel.VpnIpsecTunnelIke {
	DiffieHellmanGroup: *string,
	EncryptionAlgorithm: *string,
	IntegrityAlgorithm: *string,
	Lifetime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.diffieHellmanGroup">DiffieHellmanGroup</a></code> | <code>*string</code> | The Diffie-Hellman Group to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | The encryption algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.integrityAlgorithm">IntegrityAlgorithm</a></code> | <code>*string</code> | The integrity algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.lifetime">Lifetime</a></code> | <code>*f64</code> | The phase lifetime in seconds. |

---

##### `DiffieHellmanGroup`<sup>Optional</sup> <a name="DiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.diffieHellmanGroup"></a>

```go
DiffieHellmanGroup *string
```

- *Type:* *string

The Diffie-Hellman Group to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#diffie_hellman_group VpnIpsecTunnel#diffie_hellman_group}

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.encryptionAlgorithm"></a>

```go
EncryptionAlgorithm *string
```

- *Type:* *string

The encryption algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#encryption_algorithm VpnIpsecTunnel#encryption_algorithm}

---

##### `IntegrityAlgorithm`<sup>Optional</sup> <a name="IntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.integrityAlgorithm"></a>

```go
IntegrityAlgorithm *string
```

- *Type:* *string

The integrity algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#integrity_algorithm VpnIpsecTunnel#integrity_algorithm}

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.lifetime"></a>

```go
Lifetime *f64
```

- *Type:* *f64

The phase lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#lifetime VpnIpsecTunnel#lifetime}

---

### VpnIpsecTunnelTimeouts <a name="VpnIpsecTunnelTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

&vpnipsectunnel.VpnIpsecTunnelTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#create VpnIpsecTunnel#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#default VpnIpsecTunnel#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#delete VpnIpsecTunnel#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#update VpnIpsecTunnel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#create VpnIpsecTunnel#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#default VpnIpsecTunnel#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#delete VpnIpsecTunnel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/vpn_ipsec_tunnel#update VpnIpsecTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnIpsecTunnelAuthOutputReference <a name="VpnIpsecTunnelAuthOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

vpnipsectunnel.NewVpnIpsecTunnelAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnIpsecTunnelAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetPskKey">ResetPskKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPskKey` <a name="ResetPskKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetPskKey"></a>

```go
func ResetPskKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKeyInput">PskKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKey">PskKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PskKeyInput`<sup>Optional</sup> <a name="PskKeyInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKeyInput"></a>

```go
func PskKeyInput() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `PskKey`<sup>Required</sup> <a name="PskKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKey"></a>

```go
func PskKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() VpnIpsecTunnelAuth
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

---


### VpnIpsecTunnelEspList <a name="VpnIpsecTunnelEspList" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

vpnipsectunnel.NewVpnIpsecTunnelEspList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnIpsecTunnelEspList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.get"></a>

```go
func Get(index *f64) VpnIpsecTunnelEspOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnIpsecTunnelEspOutputReference <a name="VpnIpsecTunnelEspOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

vpnipsectunnel.NewVpnIpsecTunnelEspOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnIpsecTunnelEspOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetDiffieHellmanGroup">ResetDiffieHellmanGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetIntegrityAlgorithm">ResetIntegrityAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiffieHellmanGroup` <a name="ResetDiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetDiffieHellmanGroup"></a>

```go
func ResetDiffieHellmanGroup()
```

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetEncryptionAlgorithm"></a>

```go
func ResetEncryptionAlgorithm()
```

##### `ResetIntegrityAlgorithm` <a name="ResetIntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetIntegrityAlgorithm"></a>

```go
func ResetIntegrityAlgorithm()
```

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetLifetime"></a>

```go
func ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroupInput">DiffieHellmanGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithmInput">IntegrityAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroup">DiffieHellmanGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithm">IntegrityAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetime">Lifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiffieHellmanGroupInput`<sup>Optional</sup> <a name="DiffieHellmanGroupInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroupInput"></a>

```go
func DiffieHellmanGroupInput() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithmInput"></a>

```go
func EncryptionAlgorithmInput() *string
```

- *Type:* *string

---

##### `IntegrityAlgorithmInput`<sup>Optional</sup> <a name="IntegrityAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithmInput"></a>

```go
func IntegrityAlgorithmInput() *string
```

- *Type:* *string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetimeInput"></a>

```go
func LifetimeInput() *f64
```

- *Type:* *f64

---

##### `DiffieHellmanGroup`<sup>Required</sup> <a name="DiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroup"></a>

```go
func DiffieHellmanGroup() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithm"></a>

```go
func EncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `IntegrityAlgorithm`<sup>Required</sup> <a name="IntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithm"></a>

```go
func IntegrityAlgorithm() *string
```

- *Type:* *string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetime"></a>

```go
func Lifetime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnIpsecTunnelIkeOutputReference <a name="VpnIpsecTunnelIkeOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

vpnipsectunnel.NewVpnIpsecTunnelIkeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnIpsecTunnelIkeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetDiffieHellmanGroup">ResetDiffieHellmanGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetIntegrityAlgorithm">ResetIntegrityAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiffieHellmanGroup` <a name="ResetDiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetDiffieHellmanGroup"></a>

```go
func ResetDiffieHellmanGroup()
```

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetEncryptionAlgorithm"></a>

```go
func ResetEncryptionAlgorithm()
```

##### `ResetIntegrityAlgorithm` <a name="ResetIntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetIntegrityAlgorithm"></a>

```go
func ResetIntegrityAlgorithm()
```

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetLifetime"></a>

```go
func ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroupInput">DiffieHellmanGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithmInput">IntegrityAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroup">DiffieHellmanGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithm">IntegrityAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetime">Lifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiffieHellmanGroupInput`<sup>Optional</sup> <a name="DiffieHellmanGroupInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroupInput"></a>

```go
func DiffieHellmanGroupInput() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithmInput"></a>

```go
func EncryptionAlgorithmInput() *string
```

- *Type:* *string

---

##### `IntegrityAlgorithmInput`<sup>Optional</sup> <a name="IntegrityAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithmInput"></a>

```go
func IntegrityAlgorithmInput() *string
```

- *Type:* *string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetimeInput"></a>

```go
func LifetimeInput() *f64
```

- *Type:* *f64

---

##### `DiffieHellmanGroup`<sup>Required</sup> <a name="DiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroup"></a>

```go
func DiffieHellmanGroup() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithm"></a>

```go
func EncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `IntegrityAlgorithm`<sup>Required</sup> <a name="IntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithm"></a>

```go
func IntegrityAlgorithm() *string
```

- *Type:* *string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetime"></a>

```go
func Lifetime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.internalValue"></a>

```go
func InternalValue() VpnIpsecTunnelIke
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

---


### VpnIpsecTunnelTimeoutsOutputReference <a name="VpnIpsecTunnelTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsectunnel"

vpnipsectunnel.NewVpnIpsecTunnelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnIpsecTunnelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



